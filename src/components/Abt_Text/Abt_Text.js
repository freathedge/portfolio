import React from "react";
import styles from './Abt_Text.module.css';

export default function Abt_Text(props) {
    return (
        <p className={styles.Abt_Text}>
            {props.text}
        </p>
    )
}