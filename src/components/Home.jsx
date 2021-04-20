import React from 'react';
import './Home.css';
import { FaLinkedin } from "react-icons/fa";
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
                    <img src="https://media.istockphoto.com/vectors/purple-user-icon-in-the-circle-a-solid-gradient-vector-id1095289632?k=6&m=1095289632&s=612x612&w=0&h=nTAUUHoAFePMDh3-XYJsg6IM_idgzkjKFSB-YoKZj7o=" alt="pics2" />
                </div>
                <div className="text1">
                    <h1>Let Me Introduce Myself</h1>
                    <h4>Always open to learn new things, I am passonate to work as Front-End -Web Developer.</h4>
                    <h4>My area of interest are React.js, JavaScript, HTML, CSS, RestAPI, Node.js.</h4>
                    <h4>I also Have basic Knowledge of C, Python programming language.</h4>
                </div>
            </div>
            <div>
                <h1>Connect With Me:</h1>
                <FaLinkedin/>       
                 </div>
        </div>
    )
}
export default Home;