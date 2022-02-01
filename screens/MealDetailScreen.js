import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data (1)";
const MealDetailScreen = (props) => {
  //console.log(props);
  const { mealId } = props.route.params;
  const displayedMeals = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{displayedMeals.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailScreen;
