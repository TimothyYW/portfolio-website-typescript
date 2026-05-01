"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface Project {
    id: number;
    title: string;
    description: string;
    situation: string;
    task: string;
    action: string;
    result: string;
    technologies: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Rainbow Six Siege Lore Website",
        description: "A full-featured website covering the lore of Rainbow Six Siege",
        situation: "Developed a scalable website featuring lore about a specific video game",
        task: "Build a responsive web application with HTML and CSS",
        action: "Implemented HTML structure, styled with CSS, and automated deployment",
        result: "Achieved easier access to all current Rainbow Six Siege lore",
        technologies: ["HTML & CSS"],
        image: "/r6.webp",
        githubUrl: "https://github.com/TimothyYW/Rainbow-six-siege-lore",
        liveUrl: "https://timothyyw.github.io/Rainbow-six-siege-lore/",
    },
    {
        id: 2,
        title: "Rock Paper Scissor Game",
        description: "A JavaScript browser game for rock paper scissor",
        situation: "Created an interactive browser game using JavaScript",
        task: "Develop a game using JavaScript, HTML, and CSS",
        action: "Built game logic in JavaScript, styled with CSS, structured with HTML",
        result: "Successfully deployed a playable game for users to enjoy against the computer",
        technologies: ["Javascript", "HTML & CSS"],
        image: "/screenshot-rock-paper-scissor.png",
        githubUrl: "https://github.com/TimothyYW/javascript-game",
        liveUrl: "https://timothyyw.github.io/javascript-game/",
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        description: "A modern developer portfolio built with Next.js and TypeScript",
        situation: "Needed a professional online presence to showcase projects and skills",
        task: "Design and build a responsive portfolio website using modern web technologies",
        action: "Built with Next.js, TypeScript, and Tailwind CSS, deployed via GitHub Pages",
        result: "Delivered a fully responsive, performant portfolio site live on the web",
        technologies: ["HTML & CSS", "JavaScript"],
        githubUrl: "https://github.com/TimothyYW/my-website",
        liveUrl: "https://timothyyw.github.io/my-website-portfolio/",
    },
];

const starMethods = ["Situation", "Task", "Action", "Result"] as const;

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div id="portfolio" className="section">
            <div className="container mx-auto px-4 py-24 space-y-16">
                <div className="space-y-2">
                    <p className="section-label">&gt; my.projects</p>
                    <h2 className="section-title">Portfolio</h2>
                    <div className="section-rule" />
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group card">
                            {/* Thumbnail */}
                            <div className="aspect-video relative overflow-hidden bg-[#111]">
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={`Screenshot of ${project.title}`}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                    />
                                )}
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold font-mono">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-2 border-t border-[#1f1f1f]">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProject(project)}
                                        className="font-mono text-sm text-red-500 hover:text-white transition-colors duration-200"
                                    >
                                        view_details()
                                    </button>
                                    <div className="ml-auto flex gap-3">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                               className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
                                                <FaGithub className="text-xl" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                               className="text-gray-500 hover:text-red-500 transition-colors" aria-label="Live site">
                                                <FaExternalLinkAlt className="text-xl" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detail modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
                        <div className="card w-full max-w-2xl max-h-[85vh] overflow-y-auto">
                            <div className="flex items-center justify-between p-6 border-b border-[#1f1f1f]">
                                <h3 className="font-mono text-lg font-bold">{selectedProject.title}</h3>
                                <button type="button" onClick={() => setSelectedProject(null)}
                                        className="text-gray-500 hover:text-red-500 transition-colors" aria-label="Close">
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="p-6 space-y-6 font-mono text-sm">
                                {starMethods.map((label) => (
                                    <div key={label} className="space-y-1 border-l-2 border-[#1f1f1f] pl-4">
                                        <p className="section-label">{label}</p>
                                        <p className="text-gray-300">{selectedProject[label.toLowerCase() as keyof Project] as string}</p>
                                    </div>
                                ))}

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1f1f1f]">
                                    {selectedProject.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="flex gap-6">
                                    {selectedProject.githubUrl && (
                                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer"
                                           className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                            <FaGithub /> source_code
                                        </a>
                                    )}
                                    {selectedProject.liveUrl && (
                                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer"
                                           className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors">
                                            <FaExternalLinkAlt /> live_site
                                        </a>
                                    )}
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
