import React from "react";
import styles from './ContactBorder.module.css';
import ContactImg from "../ContactImg/ContactImg";

export default function ContactBorder(props) {

    return (
        <div className={styles.ContactBorder}>
            <ContactImg url="https://discord.gg/WKEtMFCvjR" icon="skill-icons:discord"/>
            <ContactImg url="https://github.com/freathedge" icon="skill-icons:github-dark"/>
        </div>
    )
}