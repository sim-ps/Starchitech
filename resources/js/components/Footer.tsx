import { Send } from "lucide-react";
export default function Footer() {
    return (
        <footer className="text-cream">
            <div className="bg-navy px-5 py-8 md:p-10">
                <form className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
                    <label htmlFor="email">Newsletter</label>

                    <div className="relative w-full md:w-80">
                        <input
                            className="w-full rounded-full bg-cream py-4 ps-5 pe-14 text-ink md:py-5 md:ps-7"
                            placeholder="Your Email Address"
                            type="email"
                            name="email"
                            id="email"
                        />
                        <button
                            type="submit"
                            aria-label="Subscribe"
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-rust p-3"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid gap-8 bg-ink py-12 text-center md:py-20">
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-4 md:gap-x-14">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Explore Rooms</li>
                    <li>Contact Us</li>
                </ul>

                <span className="text-cream/50">
                    © Starchitect. All rights reserved.
                </span>
            </div>
        </footer>
    );
}
