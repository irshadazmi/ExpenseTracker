import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ExpenseType from "../types/expenseType";
import styles from "../styles/styles";
import ExpenseItem from "./ExpenseItem";

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
          <ExpenseItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ExpenseGrid;