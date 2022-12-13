import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Meals = () => {
    const {id} = useParams()
    const [meal,setMeal] = useState({})
    console.log(meal);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>res.json())
        .then(data=>setMeal(data?.meals[0]))
    },[id])
    return (
        <div>
            <h1>this is meals: {meal?.strMeal}</h1>
        </div>
    );
};

export default Meals;