import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    for (let i = 1; i <= 10; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} color="gold" />);
      } else if (hasHalfStar && i === Math.ceil(rating)) {
        stars.push(
          <div className="half-star" key={i}>
            <FaStar className="full-star" color="gold" />
            <span className="half-star-character">&#189;</span>
          </div>
        );
      } else {
        stars.push(<FaRegStar key={i} color="gold" />);
      }
    }
    return stars;
  };
  
  
  
  

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>               
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div className="rating">{renderStars(rating)}</div>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default MovieCard