interface WorkExperience {
    id: number;
    title: string;
    company: string;
    duration: string;
    location: string;
    responsibilities: string[];
}

const experiences: WorkExperience[] = [
    {
        id: 1,
        title: "Web Development Student",
        company: "Purwadhika",
        duration: "2025 — 2026",
        location: "Online",
        responsibilities: [
            "Programming Fundamentals",
            "Frontend Development",
            "Backend Development",
            "Advanced Software Development",
            "AI Integration Web Development",
        ],
    },
];

function Experience() {
    return (
        <div id="experience" className="section">
            <div className="container mx-auto px-4 py-24 space-y-16">
                <div className="space-y-2">
                    <p className="section-label">&gt; work.experience</p>
                    <h2 className="section-title">Experience</h2>
                    <div className="section-rule" />
                </div>

                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 border-l border-[#1f1f1f]">
                            <div className="timeline-dot" />

                            <div className="card p-6 space-y-4">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold font-mono text-red-400">{exp.title}</h3>
                                        <p className="text-gray-400 font-mono text-sm">{exp.company}</p>
                                    </div>
                                    <div className="text-right font-mono text-sm text-gray-500 shrink-0">
                                        <p>{exp.duration}</p>
                                        <p>{exp.location}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-mono">
                                            <span className="text-red-600 mt-0.5 shrink-0">›</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
