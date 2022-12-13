import { useEffect, useState } from "react"

const useMeals= (food)=>{
    const [meals, setMeals]=useState([])
    const [loading,setLoading] = useState(false)
     useEffect(()=>{
      setLoading(true)
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
      .then(res=>res.json())
      .then(data=>{
        setMeals(data.meals)
        setLoading(false)
      })
    },[food])
    return [meals, loading]
}

export default useMeals