import React from "react";
import styles from './ProjectsContent.module.css';
import ProjectCard from "../ProjectCard/ProjectCard";
import portfolio from './portfolio.png';
import organizeIt from './organize-it.png';

export default function ProjectsContent(props) {
    return (
        <div className={styles.ProjectsContent}>
            <ProjectCard 
                title="portfolio" 
                githubUrl="https://github.com/freathedge/portfolio" 
                url="https://adrian-buder.at" 
                src={portfolio} 
                text="This is my portfolio website. It is built with React and styled with CSS modules." 
            />
            <ProjectCard
                title="Organize-It"
                githubUrl="https://github.com/freathedge/portfolio"
                url="https://organize-it.adrian-buder.at"
                src={organizeIt}
                text="I built this app using Vite + React. It helps you organize all your Documents and Folders easily."
            />
        </div>
    )
}