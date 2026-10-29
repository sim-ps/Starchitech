import { Head } from "@inertiajs/react";
import { MoveRight } from "lucide-react";
import Nav from "@/components/Nav.jsx";
import Footer from "@/components/Footer.jsx";
export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Nav />
            <section className="noise-bg-b bg-center flex-col gap-4 md:gap-0 md:flex-row flex items-end justify-between p-8 pt-14 md:px-28 text-navy md:pt-20 md:pb-28">
                <p className="uppercase text-4xl text-center md:text-start md:text-7xl max-w-150">
                    <b className="font-extrabold">see</b> <i>your room</i>{" "}
                    <b className="font-extrabold">take shape in 3d.</b>
                </p>
                <div className="flex-col flex md:flex-row items-center md:items-end gap-8 md:gap-16">
                    <div>
                        <p className="text-justify text-pretty text-sm md:text-base max-w-72 leading-5 mb-8 md:mb-16">
                            Explore bedroom and living-room styles, then
                            customize the furniture and finishes to create a
                            space that feels like yours.
                        </p>
                        <button className="button bg-rust text-cream">
                            Explore Rooms <MoveRight size={18} />
                        </button>
                    </div>
                    <img
                        className="w-56 md:max-w-72"
                        src="/home/isometric room.png"
                        alt="room"
                    />
                </div>
            </section>
            <img
                className="hidden md:block w-full"
                src="/home/hero img.svg"
                alt="hero"
            />
            <section className="text-navy noise-bg-t py-8 px-4 md:px-0 md:py-28 flex flex-col gap-7 items-center text-center">
                <h1 className="section-heading-1">
                    <b className="font-extrabold">about</b> <i>starchitech</i>
                </h1>
                <h2 className="section-heading-2">
                    Picture the possibilities before you redesign.
                </h2>
                <div className="flex-col md:flex-row flex gap-4 md:gap-16">
                    <p className="text-sm md:text-base md:text-justify text-pretty md:max-w-125 leading-5">
                        Starchitect is an interactive 3D room-design experience
                        for exploring bedroom and living-room ideas.
                    </p>
                    <p className="text-sm md:text-base md:text-justify text-pretty md:max-w-125 leading-5">
                        Choose a room style, experiment with furniture and
                        finishes, and view the space from different angles as
                        your design takes shape.
                    </p>
                </div>
                <div className="hidden md:flex pt-10 gap-10">
                    <div className="w-100 h-100 bg-stone"></div>
                    <div className="w-100 h-100 bg-stone"></div>
                    <div className="w-100 h-100 bg-stone"></div>
                </div>
            </section>
            <section className="text-ink grid gap-4 md:gap-8 text-center px-8 py-20 md:py-36 md:px-48 goal-bg-mobile md:goal-bg">
                <h1 className="section-heading-1">
                    <b className="font-extrabold">our</b> <i>goal</i>
                </h1>
                <h2 className="section-heading-2">
                    making room design easier to imagine
                </h2>
                <i className="font-extralight text-xl md:text-4xl">
                    “ We created Starchitect to help people explore
                    interior-design ideas in 3D. Preview different styles, try
                    combinations, and see how your choices come together.”
                </i>
            </section>
            <Footer />
        </>
    );
}
