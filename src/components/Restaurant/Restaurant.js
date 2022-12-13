

import useMeals from '../../hook/useMeals';
import Meal from '../Meal/Meal';
import '../Meal/Meal.css'
const Restaurant = ({food}) => {
 const [meals, loading] = useMeals(food)
   if(loading) return 'Loading'

    return (
      <div className='meals'>
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