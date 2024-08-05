import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface BsecondProps {
  
}

const Bsecond: FC<BsecondProps> = ({}) => {
  return (
    <>
       <div className="bottom-2">
      <Container>
      <Row>
        <Col className='first'>Latest advancements</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
      </div>
    </>
  );
};

export default Bsecond;