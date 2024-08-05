import React, { FC } from 'react';
import './Footer.css'
import { Button } from 'react-bootstrap';
import { GoArrowUpRight } from "react-icons/go";


interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <div className='container'>
<div className="footer-container">
    <div className="title">
    <h3>Instant answers. Greater</h3>
    <h3>productivity. Endless inspiration.</h3>
    </div>
<div className='container-button'>
<Button  size="lg" className='button'>Try ChatGpt <GoArrowUpRight /></Button>

</div>
   
</div>



      </div>

    </>
  );
};

export default Footer;