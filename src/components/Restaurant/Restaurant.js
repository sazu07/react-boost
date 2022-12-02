import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const Restaurant = ({food}) => {
   useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
   },[food])
    return (
      <div></div>
    );
};

export default Restaurant;