import React, { FC } from 'react';
import './ChatGPT.css'
import { Card, Col, Figure, Row } from 'react-bootstrap';

interface ChatGptProps {
    title: string;
    content:string;
}

const ChatGPT: FC<ChatGptProps> = ({ title,content }) => {
    return (
        <>
            <div className='chat'>
                <h3>ChatGPT</h3>

                <div className='grid'>

                    <Row>
                        <Col>

             

                        </Col>

                        <Col>

                            <Card className="custom-card">
                                <Card.Img
                                    variant="top"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/3XDJfuQZLCKWAIOleFIFZn/14b93d23652347ee7706eca921e3a716/enterprise.png?w=640&q=90&fm=webp"
                                    className="custom-card-img"
                                />
                                <div className="card-title-overlay">{title}</div>
                                <div className='squre'><h3>GPT-4O mini</h3></div>
                                <p className="card-text">{content}</p>
                                
                            </Card>

                        </Col>

                        <Col>

                            <Card className="custom-card">
                                <Card.Img
                                    variant="top"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/1ZTOGp7opuUflFmI2CsATh/df5da4be74f62c70d35e2f5518bf2660/ChatGPT_Carousel1.png?w=640&q=90&fm=webp"
                                    className="custom-card-img"
                                />
                                <div className="card-title-overlay">{title}</div>
                                <p className="card-text">{content}</p>

                            </Card>


                        </Col>

                        <Col>
                            <Card className="custom-card">
                                <Card.Img
                                    variant="top"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/3oQ0LwB3yg3R5isshaaJKi/bf1e997adf17012fceea0feb29d35bf4/introducing_the_gpt_store.jpg?w=640&q=90&fm=webp"
                                    className="custom-card-img"
                                />
                                <div className="card-title-overlay">{title}</div>
                                <p className="card-text">{content}</p>

                            </Card>
                        </Col>

                        <Col>

                            <Card className="custom-card">
                                <Card.Img
                                    variant="top"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/IPgFYDUMeUtWcg2ze2IsP/118ea87d54734ef3f49b432ee2a35b56/DALL_E_2024-07-17_16.25.57_-_Close-up_of_soft_pink_flower_petals_with_a_gentle_motion_blur_on_a_light_lavender_background__c.png?w=640&q=90&fm=webp"
                                    className="custom-card-img"
                                />
                                <div className="card-title-overlay">{title}</div>
                                <p className="card-text" style={{color:'black'}}>{content}</p>

                            </Card>

                        </Col>

                        

                        


                    </Row>

                </div>

            </div>
        </>
    );
};

export default ChatGPT;