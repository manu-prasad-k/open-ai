import React, { FC } from 'react';
import './Footer2.css';
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

interface Footer2Props {
  
}

const Footer2: FC<Footer2Props> = ({}) => {
  return (
    <>
       <footer className="footer">
      <div className="footer-content">
        <p>&copy; OpenAI © 2015–2024</p>
        <ul className="footer-links">
          <li><a href="/about"></a><FaGithub /></li>
          <li><a href="/contact"></a><FaYoutube /></li>
          <li><a href="/privacy"></a><FaLinkedin /></li>
          <li><a href="/privacy"></a><FaInstagram /></li>
        </ul>
      </div>
    </footer>
    </>
  );
};

export default Footer2;
