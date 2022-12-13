import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useMeals from '../../hook/useMeals';
import Meal from '../Meal/Meal';

const Restaurant = ({food}) => {
 const [meals, loading] = useMeals(food)
   if(loading) return 'Loading'
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