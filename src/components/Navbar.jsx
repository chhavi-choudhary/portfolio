import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
           <ul className='navbar'>
                <li><Link className="link" to='/'>Home</Link></li>
                <li><Link className="link" to='/about'>About</Link></li>
                <li><Link className="link" to='/project'>Projects</Link></li>
                <li><Link className="link" to='/resume'>Resume</Link></li>
                <li><Link className="link" to='/git'>Github</Link></li>
            </ul> 
        </div>
    )
}
