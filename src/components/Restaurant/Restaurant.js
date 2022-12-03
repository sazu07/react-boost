import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restaurant = ({food}) => {
  const [meals, setMeals]=useState([])
   useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then(res=>res.json())
    .then(data=>setMeals(data.meals))
     console.log(meals)
   },[food])
    return (
      <div>
        {
          meals.map(meal=><Meal 
            key={meal.idMeal}
            meal={meal}
            ></Meal>)
        }
      </div>
    );
};

export default Restaurant;