//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealScreen from "./screens/CategoryMealScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import Color from "./colors/Color";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./components/HeaderButton";

const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Meals Categories",
            headerStyle: { backgroundColor: Color.primaryColor },
          }}
        />
        <Stack.Screen
          name="Category Meals"
          component={CategoryMealScreen}
          options={({ route }) => ({
            title: route.params.categoryTitle,
            headerStyle: {
              backgroundColor: { backgroundColor: Color.accentColor },
            },
          })}
        />
        <Stack.Screen
          name="Meal Detail"
          component={MealDetailScreen}
          options={({ route }) => ({
            title: route.params.mealTitle,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Favorite"
                  iconName="ios-star"
                  onPress={() => {
                    console.log("Mark as favorite!");
                  }}
                ></Item>
              </HeaderButtons>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
