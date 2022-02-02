import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data (1)";
import MealItem from "../components/MealItem";
import Meal from "../models/Meals";
import MealList from "../components/MealList";
const CategoryMealScreen = (props) => {
  //console.log(props);
  const { categoryId } = props.route.params;
  //const catId = props.navigation.getParam("categoryId");
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList displayedMeals={displayedMeals} navigation={props.navigation} />;
};

/**CategoryMealScreen.navigationOptions = (navigationData) => {
  const { categId } = navigationData.route.params;
  const selectedCateg = CATEGORIES.find((cat) => cat.id === categId);
  return {
      headerTitle: selectedCateg.title
  }
}; */

export default CategoryMealScreen;
