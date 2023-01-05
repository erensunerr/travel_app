import React from 'react';
import {FlatList, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
    // Shows the category picker
    return (
        <FlatList
            data={categories}
            style={{
                marginRight: -32,
            }}
            keyExtractor={
                (item) => item
            }
            renderItem={
                ({ item }) => {
                    const isSelected = selectedCategory === item;
                    return (
                    <TouchableOpacity
                        style={[styles.categoryContainer, isSelected ? styles.selectedCategoryContainer : {}]}
                        onPress={() => setSelectedCategory(item)}
                    >
                        <Text style={[styles.category, isSelected ? styles.selectedCategory : {}]}>{item}</Text>
                    </TouchableOpacity>

                )}
            }
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default React.memo(Categories);