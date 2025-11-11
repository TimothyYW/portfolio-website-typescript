import type { ReactNode } from "react";

interface CardProps {
    title: string;
    /** optional icon element to display in the card (pass a react-icons element or an SVG) */
    icon?: ReactNode;
    /** short description shown under the title */
    description?: string;
}

function Card (props: CardProps){
    return (
        <div className="h-[230px] rounded-lg bg-white text-black space-y-4 p-4">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-lg shadow">
                {props.icon ?? <span className="text-2xl">🎯</span>}
            </div>
            <p className="font-semibold">{props.title}</p>
            <p className="text-sm text-gray-600">
                {props.description ?? "No description provided."}
            </p>
        </div>
    );
}

export default Card;