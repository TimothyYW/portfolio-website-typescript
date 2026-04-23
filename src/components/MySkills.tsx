import type { ReactNode } from "react";
import Card from "./Card";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiJavascript, SiDjango, SiClaude } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";

const iconMap: Record<string, ReactNode> = {
    HTML:         <FaHtml5 className="text-3xl text-orange-500" />,
    CSS:          <FaCss3Alt className="text-3xl text-blue-400" />,
    Javascript:   <SiJavascript className="text-3xl text-yellow-400" />,
    React:        <FaReact className="text-3xl text-sky-400" />,
    Django:       <SiDjango className="text-3xl text-green-500" />,
    Python:       <AiOutlinePython className="text-3xl text-blue-400" />,
    "R Language": <FaCode className="text-3xl text-red-400" />,
    Git:          <FaGitAlt className="text-3xl text-red-500" />,
    RStudio:      <FaCode className="text-3xl text-cyan-500" />,
    "VS Code":    <VscVscode className="text-3xl text-blue-500" />,
    "Claude AI":  <SiClaude className="text-3xl text-orange-400" />,
};

const descriptionMap: Record<string, string> = {
    HTML:         "Standard language for structuring web content and building pages.",
    CSS:          "Controls layout, colors, and visual design of web pages.",
    Javascript:   "Scripting language for building interactive browser experiences.",
    React:        "Component-based library for building modern user interfaces.",
    Django:       "High-level Python framework for rapid backend development.",
    Python:       "Versatile language for web backends, data science, and scripting.",
    "R Language": "Statistical computing language for data analysis and visualization.",
    Git:          "Distributed version control for tracking code changes and collaborating.",
    RStudio:      "IDE for R, simplifying coding, plotting, and package management.",
    "VS Code":    "Lightweight but powerful source code editor with rich extension support.",
    "Claude AI":  "AI assistant used for writing support, grammar correction, and structuring technical discussions.",
};

const sections = [
    { label: "Front-End",      skills: ["HTML", "CSS", "Javascript", "React"] },
    { label: "Back-End",       skills: ["Django", "R Language", "Python"] },
    { label: "DevOps & Tools", skills: ["Git", "RStudio", "VS Code", "Claude AI"] },
];

function MySkills() {
    return (
        <div id="skills" className="section">
            <div className="container mx-auto px-4 py-24 space-y-16">
                <div className="space-y-2">
                    <p className="section-label">&gt; my.skills</p>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <div className="section-rule" />
                </div>

                {sections.map(({ label, skills }) => (
                    <div key={label} className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="section-label">//</span>
                            <h3 className="font-mono text-base font-semibold text-gray-300">{label}</h3>
                            <div className="flex-1 h-px bg-[#1f1f1f]" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {skills.map((skill, i) => (
                                <Card
                                    key={i}
                                    title={skill}
                                    icon={iconMap[skill] ?? <FaCode className="text-3xl text-gray-400" />}
                                    description={descriptionMap[skill]}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MySkills;
