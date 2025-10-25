import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'

const BudgetScreen = () => {
  const [balance] = useState(1500)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Screen</Text>
      <Text style={styles.text} >Budget = {balance}</Text>
    </View>
  )
}

export default BudgetScreen