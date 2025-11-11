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
        title: "Web development student",
        company: "Purwadhika",
        duration: "2025 - 2026",
        location: "Online",
        responsibilities: [
            "Programming Fundamental",
            "Frontend Development",
            "Backend Development",
            "Advanced Software Development",
            "AI Integration Web Development"
        ]
    },
];

function Experience() {
    return (
        <div id="experience" className="bg-[black] text-white">
            <div className="container mx-auto py-24 space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Experience</h2>
                    <p className="text-lg text-gray-300">My professional journey and roles</p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <div 
                            key={exp.id} 
                            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
                        >
                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-red-500">{exp.title}</h3>
                                        <p className="text-lg text-gray-300">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-400">{exp.duration}</p>
                                        <p className="text-gray-400">{exp.location}</p>
                                    </div>
                                </div>

                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    {exp.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="pl-2">
                                            {responsibility}
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