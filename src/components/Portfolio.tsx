"use client";

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
    id: number;
    title: string;
    description: string;
    situation: string;
    task: string;
    action: string;
    result: string;
    technologies: string[];
    image: string;
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Rainbow six siege lore website",
        description: "A full-featured website talking about lore of video game rainbow six siege",
        situation: "Developed a scalable website that featured lore about specific video game",
        task: "Build a responsive web application with HTML and CSS",
        action: "Implemented HTML, styling using CSS, and automated deployment",
        result: "Achieved easier access to all current lore of rainbow six siege video game",
        technologies: ["HTML", "CSS",],
        image: "/r6.webp",
        githubUrl: "https://github.com/TimothyYW/Rainbow-six-siege-lore",
        liveUrl: "https://timothyyw.github.io/Rainbow-six-siege-lore/"
    },
    {
        id: 2,
        title: "Rock Paper Scissor game",
        description: "A javascript game for rock paper scissor",
        situation: "Created a game using code based on javascript",
        task: "Develop a game using javascript, HTML and CSS",
        action: "Built using javascript, styling using CSS and structured using HTML",
        result: "Successfully deployed game for user to use for fun against computer",
        technologies: ["Javascript", "HTML", "CSS"],
        image: "/screenshot-rock-paper-scissor.png",
        githubUrl: "https://github.com/TimothyYW/javascript-game",
        liveUrl: "https://timothyyw.github.io/javascript-game/"
    }
];

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div id="portfolio" className="bg-[black] text-white">
            <div className="container mx-auto py-24 space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Portfolio</h2>
                    <p className="text-lg text-gray-300">Showcasing my latest projects and achievements</p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="aspect-video bg-gray-700 relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`Screenshot of ${project.title}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        [Project Screenshot]
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-gray-300">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm bg-gray-700 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                                    >
                                        View Details
                                    </button>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:text-red-500 transition-colors"
                                            aria-label="View source code on GitHub"
                                        >
                                            <FaGithub className="text-2xl" />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:text-red-500 transition-colors"
                                            aria-label="Visit live site"
                                        >
                                            <FaExternalLinkAlt className="text-2xl" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Details Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
                        <div className="bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6 space-y-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-gray-400 hover:text-white"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <section>
                                        <h4 className="text-lg font-semibold text-red-500">Situation</h4>
                                        <p className="text-gray-300">{selectedProject.situation}</p>
                                    </section>

                                    <section>
                                        <h4 className="text-lg font-semibold text-red-500">Task</h4>
                                        <p className="text-gray-300">{selectedProject.task}</p>
                                    </section>

                                    <section>
                                        <h4 className="text-lg font-semibold text-red-500">Action</h4>
                                        <p className="text-gray-300">{selectedProject.action}</p>
                                    </section>

                                    <section>
                                        <h4 className="text-lg font-semibold text-red-500">Result</h4>
                                        <p className="text-gray-300">{selectedProject.result}</p>
                                    </section>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {selectedProject.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm bg-gray-700 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4">
                                        {selectedProject.githubUrl && (
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
                                            >
                                                <FaGithub /> View Source
                                            </a>
                                        )}
                                        {selectedProject.liveUrl && (
                                            <a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition-colors"
                                            >
                                                <FaExternalLinkAlt /> Visit Site
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfolio;