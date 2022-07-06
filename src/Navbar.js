import React from 'react'
import "./App.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul className='nav-ul'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        </div>
    )
}
