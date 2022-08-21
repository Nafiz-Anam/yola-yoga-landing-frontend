import React, { useState } from "react";

const Nav = () => {
    return (
        <nav className="ml-[70px]">
            <ul className="flex gap-x-[42px]">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#courses">Courses</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
