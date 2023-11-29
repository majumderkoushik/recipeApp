import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../Context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/Not Found/Notfound";
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
  const {categories, meals, categoryLoading, mealsLoading} = useMealContext();

  return (
    <main className='main-content'>
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
    </main>
  )
}

export default HomePage;