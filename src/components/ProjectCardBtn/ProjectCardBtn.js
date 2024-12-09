import React from "react";
import styles from './ProjectCardBtn.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProjectCardBtn(props) {
    return (
        <a className={styles.ProjectCardBtn} href={props.url}>
            <Icon icon="skill-icons:github-dark" style={{ fontSize: '2rem', verticalAlign: 'middle'}}/>
        </a>
    )
}