import React from 'react';

import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
            <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-2 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Sagir
                    </NavLink>
                    <NavLink 
                    to="/Post" 
                    className="inline-flex items-center py-1 px-3 my-3 rounded text-red-200 hover:text-green-800"
                    activeclassName="text-red-100 bg-red-700"
                    >
                        Blog Post
                    </NavLink>
                    <NavLink 
                    to="/project" 
                    className="inline-flex items-center py-1 px-3 my-3 rounded text-red-200 hover:text-green-800"
                    activeclassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/about" 
                    className="inline-flex items-center py-1 px-3 my-3 rounded text-red-200 hover:text-green-800"
                    activeclassNam="text-red-100 bg-red-700"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-0.1 px-3 my-3">
                    <SocialIcon url="https://twitter.com/sager_garba" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/sagirgarba/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/SagirGarba" className="mr-4 text-xs" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}


export default NavBar