import React, { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { GoArrowUpRight } from "react-icons/go";


interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Carousel interval={null} style={{ maxWidth: '95%', margin: '0 auto' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjshHTm9035LcGLE_bCWPQ9B8Ygxv07HqofQ&s"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='heading'>
              <h1>ChatGPT on your desktop</h1>
              <p>Chat about email, screenshots, files, and anything on your screen.</p>
              <Button variant="light" size="lg" className='button'>
                Learn more
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/abstract-empty-dark-white-grey_1258-12583.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className='heading-2' style={{ color: 'black' }}>
              <h1>Ask ChatGPT anything</h1>
              <div className='text-field-center'>
                <InputGroup className='input-group-centered'>
                  <Form.Control
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{ 
                      maxWidth: '500px', 
                      width: '100%', 
                      borderTopLeftRadius: '20px', 
                      borderBottomLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }} 
                  />
                  
                </InputGroup>
                <div className='arrow'> <GoArrowUpRight /></div>
               
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st5.depositphotos.com/16171648/65410/i/450/depositphotos_654101018-stock-photo-abstract-gradient-color-background-pink.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className='heading-3'>
              <h1>Apple & ChatGPT</h1>
              <p>OpenAI and Apple announce partnership to integrate ChatGPT into Apple experiences</p>
              <Button variant="light" size="lg" className='button'>
                Learn more
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
