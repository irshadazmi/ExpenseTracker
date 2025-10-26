import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/styles";
import ExpenseType from "../types/expenseType";

const ExpenseItem = ({ item }: { item: ExpenseType }) => {
	return (
		<View key={item.id} style={styles.gridItem}>
			<Text style={styles.title}>{item.description}</Text>
			<Text style={styles.text}>Amount: {item.amount}</Text>
			<Text style={styles.text}>Category: {item.category_id}</Text>
			<Text style={styles.text}>
				Date: {new Date(item.expense_date).toDateString()}
			</Text>
		</View>
	);
};

export default ExpenseItem;
