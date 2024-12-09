import React from "react";
import styles from './Header.module.css';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

export default function Header(props) {

    return (
        <div className={styles.Header}>
            <ScrollLink
                to="HomeLink"
                spy={true}
                smooth={true}
                duration={500}
                style={{cursor: "pointer"}}>
                Home
            </ScrollLink>
            <ScrollLink
                to="AboutMeLink"
                spy={true}
                smooth={true}
                duration={500}
                offset={-40}
                style={{cursor: "pointer"}}>
                about me
            </ScrollLink>
            <ScrollLink
                to="ProjectsLink"
                spy={true}
                smooth={true}
                duration={500}
                offset={-40}
                style={{cursor: "pointer"}}>
                projects
            </ScrollLink>
        </div>
    )
}