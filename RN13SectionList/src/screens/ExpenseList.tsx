import React from 'react';
import { View, SectionList, Text } from 'react-native';
import styles from '../styles/styles';

const expenses = [{
  "title": "Grocery",
  "data": [{ "id": 1, "description": "Apples", "amount": 4.5, "date": "2025-10-23" },
  { "id": 2, "description": "Bread", "amount": 12.0, "date": "2025-10-23" }]
}, {
  "title": "Fuel/Gas",
  "data": [{ "id": 3, "description": "Diesel", "amount": 55.75, "date": "2025-10-23" },
  { "id": 4, "description": "Petrol", "amount": 25.0, "date": "2025-10-23" }]
}];

const ExpenseList = () => {
  return (
    <View style={styles.container}>
      <SectionList sections={expenses} keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.title}>
            <Text>{item.description}</Text> <Text>${item.amount.toFixed(2)}</Text>
            <Text>{item.date.toString()}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </View>
  );
}

export default ExpenseList;
