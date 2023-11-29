import React, {useEffect} from 'react';
import "./CategoryPage.scss";
import { useMealContext } from '../../Context/mealContext';
import MealList from '../../components/Meal/MealList';
import { useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actions/mealsActions';

const CategoryPage = () => {
    const { name } = useParams();
    const { categoryMeals, dispatch, categories } = useMealContext();
    let catDescription = '';
  
    if (categories) {
      categories.forEach((category) => {
        if (category?.strCategory === name) catDescription = category?.strCategoryDescription;
      });
    }
  
    useEffect(() => {
      startFetchMealByCategory(dispatch, name);
    }, [name, dispatch]);
  
    return (
      <main className='main-content py-5 bg-gray-100'>
        <div className='container mx-auto'>
          <div className='cat-description px-4 py-4 bg-blue-200 hover:bg-blue-300 rounded-lg shadow-md transition-colors duration-300'>
            <h2 className='text-3xl text-orange font-bold mb-2'>{name}</h2>
            <p className='text-gray-700 text-lg'>{catDescription}</p>
          </div>
        </div>
        {categoryMeals?.length ? <MealList meals={categoryMeals} /> : null}
      </main>
    );
  };
  
  export default CategoryPage;