import Image from "next/image";

function Jumbotron() {
    return (
        <div id="home" className="relative min-h-screen bg-black text-white flex items-center grid-bg overflow-hidden">
            {/* Vertical red accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-60" />

            {/* Corner bracket decorations */}
            <div className="absolute top-24 right-8 w-24 h-24 border-t border-r border-red-600/20" />
            <div className="absolute bottom-12 left-8 w-24 h-24 border-b border-l border-red-600/20" />

            <div className="container mx-auto px-4 py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left — text */}
                    <div className="space-y-6">
                        <p className="section-label">&gt; Hello, World!</p>
                        <h1 className="text-5xl font-bold leading-tight">
                            I&apos;m <span className="text-red-500">Timothy</span>
                            <br />Wewengkang
                        </h1>
                        <p className="font-mono text-gray-400 text-lg border-l-2 border-red-600 pl-4">
                            Web Development Student
                        </p>
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            Studying frontend and backend development — building fast,
                            functional, and well-designed web experiences.
                        </p>
                        <div className="font-mono text-sm border-l-2 border-red-600/40 pl-4 space-y-1">
                            <p className="text-white">Master of IT (Software Development)</p>
                            <p className="text-red-400">Central Queensland University, Brisbane</p>
                            <p className="text-gray-600 text-xs">Mar 2026 — Mar 2028</p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href="#contact"   className="btn-primary">Get In Touch</a>
                            <a href="#portfolio" className="btn-ghost">View Work</a>
                        </div>
                    </div>

                    {/* Right — image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Offset shadow frame */}
                            <div className="absolute inset-0 border border-red-600/30 translate-x-4 translate-y-4" />
                            <div className="relative w-80 h-80 border border-[#1f1f1f]">
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
