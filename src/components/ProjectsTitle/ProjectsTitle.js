import React from "react";
import styles from './ProjectsTitle.module.css';

export default function ProjectsTitle(props) {
    return (

        <div className={styles.ProjectsTitle}>
            <span></span>
            <h1>{props.text}</h1>
        </div>

    )
}