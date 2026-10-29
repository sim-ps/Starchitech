import { ArrowLeftToLine, Check } from "lucide-react";

export default function Login() {
    return (
        <div className="noise-bg-b-rust grid gap-5 p-6 sm:p-10 md:p-12 lg:p-20">
            <span className="flex gap-2 font-heading text-sm font-medium uppercase tracking-[5%] text-stone">
                <ArrowLeftToLine size={20} />
                back
            </span>

            <input
                className="form-input w-full"
                placeholder="Email Address or Username"
                type="text"
                name="email"
                id="email"
            />

            <input
                className="form-input w-full"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 font-heading">
                    <input
                        type="checkbox"
                        name="remember"
                        className="peer sr-only"
                    />
                    <span className="grid size-5 place-items-center rounded-sm peer-checked:bg-stone">
                        <Check className="size-4 text-ink opacity-0" />
                    </span>
                    <span className="text-stone">Remember me</span>
                </label>

                <a
                    href="/forgot-password"
                    className="font-heading text-stone underline"
                >
                    Forgot password?
                </a>
            </div>

            <button className="rounded-full bg-amber py-3 font-medium">
                Login
            </button>

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
                <a href="/register" className="font-bold text-amber underline">
                    Sign up
                </a>
            </p>
        </div>
    );
}
