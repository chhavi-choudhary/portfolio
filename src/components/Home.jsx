import React from 'react';
import './Home.css';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai"

function Home() {
    return (
        <div>
            <div className="intro1">
                <div className="text">
                    <h2>Hello!!👋</h2>
                    <h2>I'M Chhavi Choudhary</h2>
                    <h2>Junior Front-End-Web Developer</h2>
                </div>
                <div className="pic1">
                    <img src="https://sleekbundle.com/wp-content/uploads/2019/12/Cool-Kit-2-backup2-14.jpg" alt="pics1" />
                </div>
            </div>
            <div className="about">
                <div className="pics2">
                    <img src="https://icon2.cleanpng.com/20180529/gvy/kisspng-female-youtube-in-my-frame-of-mind-female-avatar-5b0cd573872302.5131979915275677315535.jpg" alt="pics2" />
                </div>
                <div className="text1">
                    <h1>Let Me Introduce Myself</h1>
                    <h4>Always open to learn new things, I am passonate to work as Front-End -Web Developer.</h4>
                    <h4>My area of interest are React.js, JavaScript, HTML, CSS, RestAPI, Node.js.</h4>
                    <h4>I also Have basic Knowledge of C & Python programming language.</h4>
                </div>
            </div>
            <div className="socialmedia">
                <h2>Connect With Me:</h2>
                <p>Feel free to connect with me :)</p>
                <div className="icons">
               <a href="https://www.linkedin.com/in/choudhary-chhavi/"> <p><FaLinkedin /></p></a>
                <p className="icon2"><AiFillGithub /></p>
                </div>
            </div>
        </div>
    )
}
export default Home;