import React from 'react';
import "./Meal.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {
 

   const { strMeal, strMealThumb, strInstructions, idMeal}=meal
    return (
            <div className='meal'>
                <Card >
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                <Card.Title>Meal name:{strMeal}</Card.Title>
                <Card.Text>
                     { strInstructions.slice(0, 200)}
                </Card.Text>
                <Link to={`/${idMeal}`}  >Go somewhere</Link>
                </Card.Body>
                </Card>
            </div>
    );
};

export default Meal;