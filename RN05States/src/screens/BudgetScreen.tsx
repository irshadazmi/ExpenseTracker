import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'

const BudgetScreen = () => {
  const [balance, setBalance] = useState(1000)
  const [expense, setExpense] = useState(0)

  const handleAddExpense = () => {
    setExpense(expense + 50)
    setBalance(balance - 50)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Screen</Text>
      <Text style={styles.text}>Current Balance = {balance}</Text>
      <Text style={styles.text}>Current Expense = {expense}</Text>
      <Button title="Add $50 to Expense" onPress = {handleAddExpense} />
    </View>
  )
}

export default BudgetScreen