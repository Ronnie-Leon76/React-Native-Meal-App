import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data (1)";
import Color from "../colors/Color";
import CategoryGridTile from "../components/CategoryGridTile";
const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("Category Meals", {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

/**CategoriesScreen.navigationOptions = {
  headerTitle: "Meals Categories",
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
  },
  headerTintColor: "white",
}; */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesScreen;
