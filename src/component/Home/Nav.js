import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    return (
        <section className="nav">
            <div className="logo">
                <Link to="/" style={{textDecoration: "none", color: "#141313"}}>
                 <h1>M</h1>
                </Link>
            </div>
            <div className="menu-item">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    {
                        location.pathname === '/' ? (
                            <>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#brand">Brand</a></li>
                                <li><a href="#stories">Stories</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </>
                        ):
                        ('')
                    }
                    <li><Link to="/imageUpload">Image Upload</Link></li>
                    <li><Link to="/tshirt">tshirt</Link></li>
                </ul>
            </div>
        </section>
    );
};

export default Nav;