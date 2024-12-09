import React from "react";
import styles from './SkillsBtn.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Abt_Text(props) {
    return (
        <div className={styles.SkillsBtn}>
            <Icon icon={props.icon} style={{ fontSize: '24px', verticalAlign: 'middle' }}/>
            {props.text}
        </div>
    )
}