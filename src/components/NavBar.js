import React from 'react';

import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
            <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-2 px-6 lg:px-10 mr-0 sm:mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Sagir
                    </NavLink>
                    <NavLink 
                    to="/Post" 
                    className="inline-flex items-center py-1 px-1 lg:px-2 my-3 rounded text-red-200 hover:text-green-800"
                    activeclassName="text-red-100 bg-red-700"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                    to="/project" 
                    className="inline-flex items-center py-1 px-1 lg:px-2 my-3 rounded text-red-200 hover:text-green-800"
                    activeclassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/about" 
                    className="inline-flex items-center py-1 px-1 lg:px-2 my-1 rounded text-red-200 hover:text-green-800"
                    activeclassNam="text-red-100 bg-red-700"
                    >
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}


export default NavBar