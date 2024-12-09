import React from "react";
import styles from './Background.module.css';

export default function Background(props) {
    return (
        <div className={styles.Background}>
            <div className={styles.BackgroundPattern}>
            </div>
            {props.children}
        </div>
    )
}