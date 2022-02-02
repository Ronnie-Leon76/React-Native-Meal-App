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
import FavoriteScreen from "./screens/FavoriteScreen";
import Color from "./colors/Color";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./components/HeaderButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//import  { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          headerStyle: { backgroundColor: Color.primaryColor },
          headerLeft: () => (
            <HeaderButtons
              HeaderButtonComponent={CustomHeaderButton}
            ><Item title="Menu" iconName="ios-menu" onPress={() => {}}></Item></HeaderButtons>
          ),
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
                //title="Favorite"
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
  );
}
const FavoriteStack = createNativeStackNavigator();
function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorites" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function tab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({}) => {
          let iconName;

          if (route.name === "Meals") {
            iconName = "ios-restaurant";
          } else if (route.name === "favorite") {
            iconName = "ios-star";
          }
          return (
            <Ionicons name={iconName} size={25} color={Color.primaryColor} />
          );
        },
      })}
    >
      <Tab.Screen name="Meals" component={StackScreen} />
      <Tab.Screen name="favorite" component={FavoriteStackScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="meals" component={tab} />
    </Drawer.Navigator>
  );
}

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
      <MyDrawer />
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
