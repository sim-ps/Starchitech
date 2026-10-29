import AuthLayout from "@/components/AuthLayout";
import { ArrowLeftToLine, Check } from "lucide-react";
import { Link, useForm } from "@inertiajs/react";

export default function Signup() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    return (
        <AuthLayout
            title="Signup"
            heading="Create your account!"
            message="Sign up to explore room styles and start designing in 3D."
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
                    post("/signup");
                }}
                className="grid gap-5"
            >
                <input
                    className="form-input w-full"
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={data.name}
                    onChange={(event) => setData("name", event.target.value)}
                    required
                />
                {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                )}

                <input
                    className="form-input w-full"
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(event) => setData("email", event.target.value)}
                    required
                />
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                )}

                <input
                    className="form-input w-full"
                    placeholder="Password"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={data.password}
                    onChange={(event) =>
                        setData("password", event.target.value)
                    }
                    required
                />

                <input
                    className="form-input w-full"
                    placeholder="Confirm Password"
                    type="password"
                    name="password_confirmation"
                    autoComplete="new-password"
                    value={data.password_confirmation}
                    onChange={(event) =>
                        setData("password_confirmation", event.target.value)
                    }
                    required
                />
                {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                )}

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-full bg-amber py-3 font-medium disabled:opacity-60"
                >
                    {processing ? "Creating account..." : "Create Account"}
                </button>
            </form>

            <p className="text-center font-heading text-sm text-stone sm:text-base">
                Already have an account?{" "}
                <Link
                    href="/loginpage"
                    className="font-bold text-amber underline"
                >
                    Log in
                </Link>
            </p>
        </AuthLayout>
    );
}
