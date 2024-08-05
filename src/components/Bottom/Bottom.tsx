import React, { FC } from 'react';
import './Bottom.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bsecond from '../Bsecond/Bsecond';

interface BottomProps {

}

const Bottom: FC<BottomProps> = ({ }) => {
  return (
    <>
      <div className="bottom">

        <Container>

          <Row>
            <Col className='first'>
              Our research
              <div>Overview</div>
              <div>Index </div>

            </Col>
            <Col className='second'>
              ChatGPT
              <div>For Everyone</div>
              <div>For Teams</div>
            </Col>

            <Col className='third'>
              Safety overview
              <div>Safety overview</div>
              <div> Safety standards</div>
            </Col>
            <Col className='fourth'>Company
              <div> About us</div>
              <div>News </div>
            </Col>
            <Col className='fifth'>
              Terms & policies
              <div>Terms of use</div>
              <div> Privacy policy</div>
            </Col>


          </Row>
        </Container>



      </div>
      <div className="bottom-2">
        <Container>
          <Row>
            <Col className='first'>
              Latest advancements
              <div>GPT-4</div>

              <div>GPT-4o mini</div>
              <div>DALL·E 3</div>
              <div>Sora</div>

            </Col>



            <Col className='third'>
              Teams
              <div>Safety Systems</div>
              <div>Preparedness</div>
              <div>Superalignment</div>

            </Col>
          </Row>
          <Row>
            <Col></Col>



            <Col className='second'>

              For Enterprises
              <div>ChatGPT login</div>
              <div>Download </div>
            </Col>
            <Col className='fourth'>
              Our Charter
              <div>Security</div>
              <div>Residency</div>
              <div>Careers</div>


            </Col>
            <Col></Col>

          </Row>
        </Container>
      </div>

    </>
  );
};

export default Bottom;