import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles/styles'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome To Expense Tracker
        </Text>
    </View>
  )
}

export default App