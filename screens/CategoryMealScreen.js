import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data (1)";
import MealItem from "../components/MealItem";
import Meal from "../models/Meals";
const CategoryMealScreen = (props) => {
  //console.log(props);
  const { categoryId } = props.route.params;
  //const catId = props.navigation.getParam("categoryId");
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate("Meal Detail", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
          });
        }}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

/**CategoryMealScreen.navigationOptions = (navigationData) => {
  const { categId } = navigationData.route.params;
  const selectedCateg = CATEGORIES.find((cat) => cat.id === categId);
  return {
      headerTitle: selectedCateg.title
  }
}; */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealScreen;
