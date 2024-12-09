import React from "react";
import styles from './Abt_Content.module.css';
import Abt_Text from '../Abt_Text/Abt_Text.js';
import SkillsContainer from '../SkillsContainer/SkillsContainer.js';


export default function Abt_Content(props) {
    return (
        <div className={styles.Abt_Content}>
            <Abt_Text text="Since i got my first computer, i was fascinated by coding and developing. I started with learning JavaScript with an easy game. When i got into programming websites, i learned how to use react. I saw the potential and mastered it. However, it got a bit boring and I wanted to learn more. I started coding in C# and it was fun, but i didn't know what to do with it. Because of this, i started developing in Java. I used my skills for making Plugins in Minecraft. To this day, I'm still learning and want to improve my skills as much as possible." />
            <SkillsContainer />
        </div>
    )
}