import React from "react";
import styles from './Home.module.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Element } from 'react-scroll'

export default function Home(props) {

    const [text] = useTypewriter({
        words: ['Frontend Development', 'Backend Development', 'Gaming'],
        loop: 0,
        typeSpeed: 150,
        deleteSpeed: 70
    })

    return (
        <Element id="HomeLink" name="Home" style={{width: 100 + "%"}}> 
            <div className={styles.Home}>
                <div>
                    <h1>Hello, I am Adrian</h1>
                    <h3>Passion for <span className='typeText'>{text}<Cursor /></span></h3>
                    <h3>Student at <a href='https://htldornbirn.at'>HTL Dornbirn</a></h3>
                </div>
            </div>
        </Element>
    )
}