import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

type AuthLayoutProps = {
    title: string;
    heading: string;
    message: string;
    children: ReactNode;
};

export default function AuthLayout(props: AuthLayoutProps) {
    return (
        <>
            <Head title={props.title} />
            <Nav />
            <section className="noise-bg-b grid place-items-center py-10 md:py-20">
                <div className="login-shape grid w-11/12 max-w-6xl grid-cols-1 md:w-3/4 md:grid-cols-[1.5fr_2fr]">
                    <div className="login-bg relative min-h-64 md:min-h-0">
                        <div className="absolute bottom-6 left-6 right-6 text-cream sm:bottom-10 sm:left-10 md:bottom-15 md:left-15">
                            <span className="mb-3 block font-heading text-xl font-bold uppercase tracking-wider sm:text-2xl md:mb-6">
                                {props.heading}
                            </span>
                            <i className="block text-2xl font-light sm:text-3xl md:text-4xl">
                                {props.message}
                            </i>
                        </div>
                    </div>

                    <div className="noise-bg-b-rust grid gap-5 p-6 sm:p-10 md:p-12 lg:p-20">
                        {props.children}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
