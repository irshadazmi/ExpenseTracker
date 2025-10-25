import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'

const BudgetScreen = ({ }) => {
  const [budgetAmount, setBudgetAmount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Screen</Text>
      <TextInput style={styles.textInput}
        placeholder="Enter your monthly limit"
        onChangeText={(text) => setBudgetAmount(parseInt(text))}
      />
      {
        budgetAmount !== 0 && 
        <Text style={styles.text}>Updated Budget mount = {budgetAmount}</Text>
      }
    </View>
  )
}

export default BudgetScreen