import {
    LayoutGridCircles,
    User,
    Menu,
    ChevronDown,
    LogIn,
    LogOut,
} from "lucide-react";
import { Link, usePage, router } from "@inertiajs/react";
export default function nav() {
    const { auth } = usePage().props as {
        auth: { user: { name: string } | null };
    };

    const user = auth.user;

    return (
        <nav className="bg-navy flex justify-between items-center p-5 md:py-6 md:px-20">
            <Menu className="text-cream size-6 md:size-7" />

            <Link
                href="/"
                className="flex items-center gap-5 font-heading text-amber uppercase tracking-[32%]"
            >
                <img className="size-6 md:size-7" src="/logo.svg" alt="logo" />
                starchitech
            </Link>

            <div className="hidden md:flex items-center gap-5">
                {user ? (
                    <button
                        type="button"
                        aria-label="Log out"
                        onClick={() => router.post("/logout")}
                        className="text-cream"
                    >
                        <LogOut className="size-6 md:size-7" />
                    </button>
                ) : (
                    <Link
                        href="/loginpage"
                        aria-label="Log in"
                        className="text-cream"
                    >
                        <LogIn className="size-6 md:size-7" />
                    </Link>
                )}

                <div
                    aria-hidden="true"
                    className="hidden h-4 border border-stone md:block"
                />

                <LayoutGridCircles className="hidden size-7 text-cream md:block" />
            </div>
        </nav>
    );
}
