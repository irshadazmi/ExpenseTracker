import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ExpenseType from "../types/expenseType";
import styles from "../styles/styles";

const ExpenseGrid = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const apiUrl = "http://192.168.29.62/api";

  const FetchExpenses = async () => {
    try {
      const response = await fetch(`${apiUrl}/expenses`);
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    FetchExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Grid</Text>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {expenses.map((item) => (
          <View key={item.id} style={styles.gridItem}>
            <Text style={styles.title}>{item.description}</Text>
            <Text style={styles.text}>Amount: {item.amount}</Text>
            <Text style={styles.text}>Category: {item.category_id}</Text>
            <Text style={styles.text}>Date: {new Date(item.expense_date).toDateString()}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ExpenseGrid;