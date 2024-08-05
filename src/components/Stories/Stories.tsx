import React, { FC} from 'react';
import './Stories.css'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




interface StoriesProps {
  heading:string;

}

const Stories: FC<StoriesProps> = ({heading}) => {

 

  return (
    <>
      <div className='story-container'>

<h3 className='title'>{heading}</h3>





<div className="cards-container">
      <Card className="card">
        <Card.Img src="https://images.ctfassets.net/kftzwdyauwt9/4GpxGw3u2hE7ddRkB2UeaV/258a18765772a24eb2175c289418538e/Home___Card_Carousel___Stories___Lifespan.jpg?w=640&q=90&fm=webp" />
      </Card>

      <Card className="card">
        <Card.Img src="https://images.ctfassets.net/kftzwdyauwt9/3K89c1c2FWByO2awUBNzgP/e5e6974e5338e66a4e187a4895c8d937/Home___Card_Carousel___Stories___Harvey.jpg?w=640&q=90&fm=webp" />
      </Card>

      <Card className="card">
        <Card.Img src="https://images.ctfassets.net/kftzwdyauwt9/e7e3dcf5-15d9-458e-be5a57df61eb/75ac3b254116f1ebe3fe66131573c96d/government_of_iceland.png?w=640&q=90&fm=webp" />
      </Card>
    </div>

      </div>
      </>
  );
};

export default Stories;