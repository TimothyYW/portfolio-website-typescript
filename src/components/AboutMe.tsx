function AboutMe() {
    return (
        <div id="about" className="section">
            <div className="container mx-auto px-4 py-24 space-y-12">
                <div className="space-y-2">
                    <p className="section-label">&gt; about.me</p>
                    <h2 className="section-title">About Me</h2>
                    <div className="section-rule" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                            I&apos;m a web development student at{" "}
                            <span className="text-red-400 font-semibold">Purwadhika</span>,
                            focused on building modern, production-ready web applications.
                            I work across the full stack — from crafting responsive UIs to
                            designing server-side APIs.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I&apos;ve worked with HTML, CSS, JavaScript, ReactJS, NextJS, and
                            TailwindCSS on the frontend, and Python/Django on the backend.
                            I&apos;m always eager to pick up new tools and apply them in real projects.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: "Focus",     value: "Full-Stack Web Development" },
                            { label: "Education", value: "Purwadhika Bootcamp (2025–2026)" },
                            { label: "Location",  value: "Brisbane, QLD, Australia" },
                            { label: "Status",    value: "Open to opportunities" },
                        ].map(({ label, value }) => (
                            <div
                                key={label}
                                className="flex gap-6 items-start border-l-2 border-[#1f1f1f] pl-4 hover:border-red-600 transition-colors duration-200"
                            >
                                <p className="section-label w-24 shrink-0">{label}</p>
                                <p className="text-gray-300 text-sm">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
