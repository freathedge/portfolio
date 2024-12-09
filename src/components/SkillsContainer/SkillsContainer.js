import React from "react";
import styles from './SkillsContainer.module.css';
import SkillsBtn from '../SkillsBtn/SkillsBtn.js'

export default function SkillsContainer(props) {
    return (
        <div className={styles.SkillsContainer}>
            <h3>Skills</h3>
            <div className={styles.SkillsGroup}>
                <SkillsBtn icon='skill-icons:html' text='HTML' />
                <SkillsBtn icon='skill-icons:css' text='CSS' />
                <SkillsBtn icon='skill-icons:javascript' text='JAVASCRIPT' />
                <SkillsBtn icon='skill-icons:react-dark' text='React' />
                <SkillsBtn icon='skill-icons:java-dark' text='Java' />
                <SkillsBtn icon='skill-icons:cs' text='C#' />
                <SkillsBtn icon='skill-icons:nodejs-dark' text='NodeJS' />
                <SkillsBtn icon='skill-icons:mysql-dark' text='MySQL' />
                <SkillsBtn icon='skill-icons:github-dark' text='GitHub' />
            </div>
        </div>
    )
}