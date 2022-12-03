import React from 'react';

const Meal = (props) => {
   const { strMeal,idMeal}=props.meal
    return (
        <div>
            <h1>Meal name:{strMeal} </h1>
        </div>
    );
};

export default Meal;