FROM php:8.3-apache

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY --from=node:22 /usr/local/ /usr/local/

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    libicu-dev \
    libonig-dev \
    libpq-dev \
    libzip-dev \
    unzip \
    && docker-php-ext-install \
        bcmath \
        intl \
        mbstring \
        pdo_pgsql \
        zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

COPY . .

RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader \
    && npm ci \
    && npm run build \
    && rm -rf node_modules

RUN sed -ri 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf \
    && printf '\nListen 10000\n' >> /etc/apache2/ports.conf \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 10000

CMD ["sh", "-c", "php artisan migrate --force && apache2-foreground"]