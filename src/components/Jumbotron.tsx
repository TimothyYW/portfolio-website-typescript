import Image from "next/image";

function Jumbotron() {
    return (
        <div id="home" className="relative min-h-screen bg-black text-white flex items-center grid-bg overflow-hidden">
            {/* Vertical red accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-60" />

            {/* Corner bracket decorations */}
            <div className="absolute top-24 right-8 w-24 h-24 border-t border-r border-red-600/20" />
            <div className="absolute bottom-12 left-8 w-24 h-24 border-b border-l border-red-600/20" />

            <div className="container mx-auto px-4 py-20 md:py-32">
                {/* Always 2 columns — image sits next to text on all screen sizes */}
                <div className="grid grid-cols-2 gap-3 md:gap-12 items-center">
                    {/* Left — text */}
                    <div className="space-y-2 md:space-y-6">
                        <p className="section-label hidden md:block">&gt; Hello, World!</p>
                        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
                            I&apos;m <span className="text-red-500">Timothy</span>
                            <br />Wewengkang
                        </h1>
                        <p className="font-mono text-gray-400 text-xs md:text-lg border-l-2 border-red-600 pl-2 md:pl-4">
                            IT Software Development Student — CQU, Brisbane
                        </p>
                        {/* Hidden on small screens — not enough space in 2-col layout */}
                        <p className="text-gray-400 max-w-md leading-relaxed hidden sm:block">
                            Studying IT Software Development at{" "}
                            <span className="text-red-400 font-semibold">Central Queensland University</span>,
                            Brisbane — building full-stack web applications, exploring backend systems,
                            and diving into <span className="text-red-400 font-semibold">AI engineering</span> and
                            intelligent solution development.
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-4 pt-1 md:pt-2">
                            <a href="#contact"   className="btn-primary">Get In Touch</a>
                            <a href="#portfolio" className="btn-ghost hidden sm:inline-block">View Work</a>
                        </div>
                    </div>

                    {/* Right — image, scales down on mobile */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 border border-red-600/30 translate-x-1 translate-y-1 md:translate-x-4 md:translate-y-4" />
                            <div className="relative w-24 h-24 sm:w-48 sm:h-48 md:w-80 md:h-80 border border-[#1f1f1f]">
                                <Image
                                    src="/thumbnail.png"
                                    alt="Timothy Wewengkang"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
