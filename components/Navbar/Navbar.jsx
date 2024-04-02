"use client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

import ContactForm from "../ContactForm";
import Link from "next/link";

const About = () => {
  return <h2>About Us Page</h2>;
};

const Contact = () => {
  return <ContactForm />;
};

const Homepage = () => {
  return (
    <div className="dash">
      <Sidebar />
      <Main />
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="mainNavbar">
      <div className="Navbar">
        <h2 className="txtGenz">
          <Link href={"/"}>GenZbot</Link>
        </h2>
        <ul className="ulNavbar">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
