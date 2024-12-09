import React from "react";
import styles from './ContactImg.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";



export default function ContactImg(props) {
    let url = props.url;
    return (
        <a className={styles.ContactImg} href={props.url}>
            <Icon icon={props.icon} style={{fontSize: "2rem", margin: "auto"}}/>
        </a>
    )
}