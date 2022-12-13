

import useMeals from '../../hook/useMeals';
import Meal from '../Meal/Meal';
import '../Meal/Meal.css'
const Restaurant = ({food}) => {
 const [meals, loading] = useMeals(food)
   if(loading) return 'Loading'
   const mealsDetails=(id)=>{
    console.log('click', id)
   }
    return (
      <div className='meals'>
        {
          meals.map(meal=><Meal 
            key={meal.idMeal}
            meal={meal}
            mealsDetails={mealsDetails}
            ></Meal>)
        }
      </div>
    );
};

export default Restaurant;