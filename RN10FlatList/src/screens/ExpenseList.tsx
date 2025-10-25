import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ExpenseType from "../types/expenseType";
import styles from "../styles/styles";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const apiUrl = 'http://192.168.29.62/api'

  const FetchExpenses = async () => {
    try {
      const response = await fetch(`${apiUrl}/expenses`);
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  }
  
  useEffect(() => {
    FetchExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense List</Text>
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.description}</Text>
            <Text style={styles.text}>Amount: {item.amount}</Text>
            <Text style={styles.text}>Category: {item.category_id}</Text>
            <Text style={styles.text}>Date: {item.expense_date.toString()}</Text>
          </View>
        )}
        />
    </View>
  );
};

export default ExpenseList;
