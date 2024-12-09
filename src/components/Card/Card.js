import React from "react";
import styles from './Card.module.css';
import Abt_title from '../Abt_title/Abt_title.js';
import Abt_Content from '../Abt_Content/Abt_Content.js';
import ProjectsTitle from "../ProjectsTitle/ProjectsTitle.js";
import ProjectsContent from "../ProjectsContent/ProjectsContent.js";
import { Element } from 'react-scroll'

export default function Card(props) {
    return (
        <div className={styles.Card}>
            <Element id="AboutMeLink" name="AboutMe">
                <Abt_title text='<about me/>' />
                <Abt_Content />
            </Element>
            <Element id="ProjectsLink" name="Projects">
                <ProjectsTitle text='<projects/>' />
                <ProjectsContent />
            </Element>

        </div>
    )
}