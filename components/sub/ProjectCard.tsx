"use client";

import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link: string
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div className="relative rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full">
            {/* Image Section */}
            <div className="relative w-full h-full">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-contain cursor-pointer"
                    onClick={() => window.open(link)}
                />
            </div>
            {/* Content Section */}
            <div className="relative p-4 bg-[#1e1e2a]">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};



export default ProjectCard;