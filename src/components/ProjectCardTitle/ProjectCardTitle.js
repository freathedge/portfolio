import React from "react";
import styles from './ProjectCardTitle.module.css';
import ProjectCardBtn from "../ProjectCardBtn/ProjectCardBtn";

export default function ProjectCardTitle(props) {
    return (
        <div className={styles.ProjectCardTitle}>
            <p>{props.title}</p>
            <ProjectCardBtn url={props.url}/>
        </div>
    )
}