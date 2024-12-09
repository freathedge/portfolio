import React from "react";
import styles from './ProjectsContent.module.css';
import ProjectCard from "../ProjectCard/ProjectCard";
import portfolio from './portfolio.png';

export default function ProjectsContent(props) {
    return (
        <div className={styles.ProjectsContent}>
            <ProjectCard title="portfolio" src={portfolio}/>
            
        </div>
    )
}