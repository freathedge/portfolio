import React from "react";
import styles from './Abt_title.module.css';

export default function Abt_title(props) {
    return (
        <div className={styles.Abt_title}>
            <h1>{props.text}</h1>
            <span></span>
        </div>
    )
}