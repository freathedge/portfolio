import React from "react";
import styles from './ProjectCard.module.css';
import ProjectCardTitle from "../ProjectCardTitle/ProjectCardTitle";

export default function ProjectCard(props) {
    return (
        <div className={styles.ProjectCard}>
            <img src={props.src} alt=""></img>
            <div>
                <ProjectCardTitle title={props.title} url={props.url} />
                <p>{props.text}</p>
            </div>
        </div>
    )
}