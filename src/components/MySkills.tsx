import type { ReactNode } from "react";
import Card from "./Card";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaCode } from "react-icons/fa";
import { SiJavascript, SiDjango } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";

function MySkills () {
    const Skills1 = [
        "HTML",
        "CSS",
        "Javascript",
        "React"
    ];

    const Skills2 = [
        "Django",
        "R Language",
        "Python"
    ];

    const Skills3 = [
        "Git",
        "RStudio"
    ];

    const iconMap: Record<string, ReactNode> = {
        HTML: <FaHtml5 className="text-4xl text-orange-500" />, 
        CSS: <FaCss3Alt className="text-4xl text-blue-500" />,
        Javascript: <SiJavascript className="text-4xl text-yellow-400" />,
        React: <FaReact className="text-4xl text-sky-400" />,
        Django: <SiDjango className="text-4xl text-green-700" />,
        Python: <AiOutlinePython className="text-4xl text-blue-600" />,
        "R Language": <FaCode className="text-4xl" />,
        Git: <FaGitAlt className="text-4xl text-red-600" />,
        RStudio: <FaCode className="text-4xl text-cyan-600" />
    };

    const descriptionMap: Record<string, string> = {
        HTML: "HyperText Markup Language — the standard language for creating webpages and structuring content.",
        CSS: "Cascading Style Sheets — used to control layout, colors, spacing, and visual design of web pages.",
        Javascript: "The main scripting language for the web used to build interactive behavior in browsers.",
        React: "A JavaScript library for building component-based user interfaces with reusable UI pieces.",
        Django: "A high-level Python web framework that promotes rapid development and clean design.",
        Python: "A versatile, easy-to-read programming language used for web backends, data science, scripting, and more.",
        "R Language": "A language and environment focused on statistics, data analysis, and visualization.",
        Git: "A distributed version control system used to track changes and collaborate on source code.",
        RStudio: "An integrated development environment (IDE) for R that simplifies coding, plotting, and package management."
    };

    return (
        <div id="skills" className="bg-[black] text-white mx-auto py-24">
            <div className="container mx-auto py-24 gap-12">
                <p className="font-bold text-sm">My Skill</p>
                <p className="font-bold text-3xl">Front-End Skills</p>
                <div className="grid grid-cols-4 gap-4 mt-8">
                    {Skills1.map((skill, index) => {
                        return <Card key={index} title={skill} icon={iconMap[skill] ?? <FaCode className="text-4xl" />} description={descriptionMap[skill]} />;
                    })}
                </div>
                <p className="font-bold text-3xl">Back-End Skills</p>
                <div className="grid grid-cols-4 gap-4 mt-8">
                    {Skills2.map((skill, index) => {
                        return <Card key={index} title={skill} icon={iconMap[skill] ?? <FaCode className="text-4xl" />} description={descriptionMap[skill]} />;
                    })}
                </div>
                <p className="font-bold text-3xl">DevOps & Tools</p>
                <div className="grid grid-cols-4 gap-4 mt-8">
                    {Skills3.map((skill, index) => {
                        return <Card key={index} title={skill} icon={iconMap[skill] ?? <FaCode className="text-4xl" />} description={descriptionMap[skill]} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default MySkills