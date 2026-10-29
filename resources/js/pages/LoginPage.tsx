import AuthLayout from "@/components/AuthLayout";
import { ArrowLeftToLine, Check } from "lucide-react";
import { Link, useForm } from "@inertiajs/react";

export default function LoginPage() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    return (
        <AuthLayout
            title="Login"
            heading="Welcome back!"
            message="Log in to continue designing your space."
        >
            <Link
                href="/"
                className="flex gap-2 md:pb-20 font-heading text-sm font-medium uppercase tracking-[5%] text-stone"
            >
                <ArrowLeftToLine size={20} />
                back
            </Link>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    post("/loginpage");
                }}
                className="grid gap-5"
            >
                <input
                    className="form-input w-full"
                    placeholder="Email Address"
                    type="text"
                    name="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(event) => setData("email", event.target.value)}
                    required
                    id="email"
                />

                <input
                    className="form-input w-full"
                    placeholder="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    value={data.password}
                    onChange={(event) =>
                        setData("password", event.target.value)
                    }
                    required
                    id="password"
                />

                <div className="flex flex-wrap items-center justify-between gap-3">
                    <label className="flex cursor-pointer items-center gap-2 font-heading">
                        <input
                            type="checkbox"
                            name="remember"
                            className="peer sr-only"
                            checked={data.remember}
                            onChange={(event) => {
                                setData("remember", event.target.checked);
                            }}
                        />
                        <span className="grid size-5 place-items-center rounded-sm peer-checked:bg-stone">
                            <Check className="size-4 text-ink opacity-0" />
                        </span>
                        <span className="text-stone">Remember me</span>
                    </label>

                    <Link
                        href="/forgot-password"
                        className="font-heading text-stone underline"
                    >
                        Forgot password?
                    </Link>
                </div>
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                )}
                {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                )}

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-full bg-amber py-3 font-medium"
                >
                    {processing ? "Logging in..." : "Log in"}
                </button>
            </form>

            <div className="flex items-center">
                <hr className="flex-1 text-stone" />
                <span className="px-3 font-heading text-stone">or</span>
                <hr className="flex-1 text-stone" />
            </div>

            <div className="flex justify-center gap-6 sm:gap-11">
                <img
                    className="size-10 rounded-full bg-stone p-2"
                    src="/login/Facebook.svg"
                    alt="Facebook"
                />
                <img
                    className="size-10 rounded-full bg-stone p-2"
                    src="/login/Instagram.svg"
                    alt="Instagram"
                />
                <img
                    className="size-10 rounded-full bg-stone p-2"
                    src="/login/Google.svg"
                    alt="Google"
                />
            </div>

            <p className="text-center font-heading text-sm text-stone sm:text-base">
                Don’t have an account?{" "}
                <Link href="/signup" className="font-bold text-amber underline">
                    Sign up
                </Link>
            </p>
        </AuthLayout>
    );
}
