import { ScrollView, Text } from "react-native";
import React from "react";
import styles from "../styles/styles";

const expenses = [
  { id: '1', desc: 'Groceries', amount: 50 }, { id: '2', desc: 'Dinner', amount: 30 },
  { id: '3', desc: 'Transport', amount: 15 }, { id: '4', desc: 'Books', amount: 25 },
  { id: '5', desc: 'Vegetables', amount: 40 }, { id: '6', desc: 'Medicine', amount: 50 },
]

const ExpenseList = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Expense List</Text>
      {expenses.map((expense) => (
        <Text key={expense.id} style={styles.text}>
          <Text style={styles.text}>Description: {expense.desc}</Text>
          <Text style={styles.text}>Amount: {expense.amount}</Text>
        </Text>
      ))}
    </ScrollView>
  );
};

export default ExpenseList;
