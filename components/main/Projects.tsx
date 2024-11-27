import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>








            <div className="grid grid-cols-3 h-screen gap-8 mx-20">
                <div className="flex-1">
                    <ProjectCard
                        src="/smartdisplay.png"
                        title="IoT Display"
                        description="A esp32 based IoT display where user can see the time, weather, social media stats, made using esp32, tm1637, websocket."
                        link="https://nikhil-maguwala-dark-3d.netlify.app/"
                    />
                </div>
                <div className="flex-1">
                    <ProjectCard
                        src="/wavv.png"
                        title="Online music streaming service"
                        description="A web based online music streaming service made using React JS, NodeJS, Tailwind CSS, Firebase."
                        link=""
                    />
                </div>
                <div className="flex-1">
                    <ProjectCard
                        src="/wallpapers.png"
                        title="Wallpy"
                        description="A High quality wallpaper downloading website made using React and Pexel API."
                        link=""
                    />
                </div>
            </div>






        </div>
    );
};

export default Projects;