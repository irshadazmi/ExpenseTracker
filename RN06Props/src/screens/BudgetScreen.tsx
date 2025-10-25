import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'

interface BudgetScreenProps {
  monthlyLimit: number
}

// const BudgetScreen = ({monthlyLimit}: BudgetScreenProps) => {
const BudgetScreen: React.FC<BudgetScreenProps> = ({ monthlyLimit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Screen</Text>
      <Text style={styles.text}>You monthly expending limit = {monthlyLimit}</Text>
    </View>
  )
}

export default BudgetScreen