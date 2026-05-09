import type { ReactNode } from "react";

type Level = "Expert" | "Intermediate" | "Beginner";

const levelConfig: Record<Level, { barClass: string; color: string }> = {
    Expert:       { barClass: "w-[85%]", color: "bg-amber-400" },
    Intermediate: { barClass: "w-[55%]", color: "bg-sky-400" },
    Beginner:     { barClass: "w-[25%]", color: "bg-emerald-400" },
};

interface CardProps {
    title: string;
    icon?: ReactNode;
    description?: string;
    level?: Level;
}

function Card(props: CardProps) {
    const lvl = props.level ? levelConfig[props.level] : null;

    return (
        <div className="card p-5 space-y-3">
            <div className="icon-box">
                {props.icon ?? <span className="text-xl text-gray-400">⚙</span>}
            </div>
            <p className="font-mono font-semibold text-white text-sm">{props.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">
                {props.description ?? "No description provided."}
            </p>
            {lvl && (
                <div className="space-y-1 pt-1">
                    <div className="w-full h-1 rounded-full bg-[#1f1f1f]">
                        <div className={`h-1 rounded-full ${lvl.color} ${lvl.barClass}`} />
                    </div>
                    <p className="font-mono text-[10px] text-gray-500">{props.level}</p>
                </div>
            )}
        </div>
    );
}

export default Card;
