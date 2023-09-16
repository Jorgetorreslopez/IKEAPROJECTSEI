import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AboutUs.module.scss'
/*const members = [
        'Terrance Hill',
        'Jorge Lopez',
        'Jamal Mayon',
        'Shumar Mcpherson',
        'Jake Carlson',
        'Diego Vasquez',
        'Yami Narvaez'
]*/

export default function AboutUs() {

        return (
                <main className={styles.Team}>
                        <div className={styles.statement1}>
                                <p>
                                        <h1 className={styles.mission}>Mission Statement:</h1>
                                        Mission Statement: At IKEA , our mission is to transform houses into homes by providing high-quality, stylish, and functional furniture that enriches the lives of our customers. We are dedicated to offering an exceptional shopping experience, where craftsmanship,  affordability, and sustainability converge.
                                </p>
                        </div>
                        <div className={styles.statement2}>
                                <p>
                                        <h1 className={styles.global}>Global Craftsmanship, Local Integrity</h1>
                                        At Ikea, we uphold the highest standards of ethical sourcing and sustainability. Our partnerships with artisans worldwide ensure fair labor practices, responsible sourcing of materials, and environmentally conscious production methods. Every piece in our collection is a testament to our commitment to both artistry and social responsibility.
                                </p>
                        </div>

                        <div className={styles.statement3}>
                                <p>
                                        <h1 className={styles.journey}>Your Journey Begins Here</h1>
                                        Explore our online catalog to embark on a journey that transcends borders. With a team dedicated to delivering excellence and a collection curated for the savant, Ikea invites you to elevate your living spaces, globally. Redefine your space with Ikea.
                                </p>
                        </div>
                        <div className={styles.names}>
                                <ul className={styles.members}>
                                        <h2 className={styles.nameColor}>Terrance Hill</h2> - Scrum Master
                                        {<img src="https://imgur.com/0wlcdHi.png" width="100" height="100"></img>}
                                </ul>
                                <ul className={styles.members}>
                                        <h2 className={styles.nameColor}>Jorge Torres Lopez</h2> - GitHub Manager
                                        {<img src="https://imgur.com/oMmVcpF.png" width="100" height="100" ></img>}
                                </ul>
                                <ul className={styles.members}>
                                        <h2 className={styles.nameColor}>Jamal Mayon</h2> - User Services Manager
                                        {<img src="https://imgur.com/c8VgM8J.png" width="100" height="100"></img>}
                                </ul>
                                <ul className={styles.members}>
                                        <h2 className={styles.nameColor}>Shumar McPherson</h2> - Database Manager
                                        {<img src="https://imgur.com/WQqplVg.png" width="100" height="100"></img>}
                                </ul>
                                <ul className={styles.members}>
                                        <h2 className={styles.nameColor}>Jake Carlson</h2> - User Services Manager
                                        {<img src="https://imgur.com/iY4893u.png" width="100" height="100"></img>}
                                </ul>
                                <ul className={styles.members}>
                                        <h2 className={styles.nameColor}>Diego Vasquez</h2> - Front End Manager
                                        {<img src="https://imgur.com/mfRIBez.png" width="100" height="100"></img>}
                                </ul>
                                <ul className={styles.members}>
                                        <h2 className={styles.nameColor}>Yami Navaez</h2> - Styling Manager
                                        {<img src="https://imgur.com/lJvCiY1.png" width="100" height="100"></img>}
                                </ul>
                        </div>
                </main>
        )
}

/*
- PICTURES OF TEAM MEMBERS
- STATEMENT ABOUT WEBSITE
- MISSION STATEMENT - (use PowerPoint Statement)
*/

