import type { ReactNode } from "react";

interface CardProps {
    title: string;
    icon?: ReactNode;
    description?: string;
}

function Card(props: CardProps) {
    return (
        <div className="card p-5 space-y-3">
            <div className="icon-box">
                {props.icon ?? <span className="text-xl text-gray-400">⚙</span>}
            </div>
            <p className="font-mono font-semibold text-white text-sm">{props.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">
                {props.description ?? "No description provided."}
            </p>
        </div>
    );
}

export default Card;
