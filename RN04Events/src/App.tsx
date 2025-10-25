import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './styles/styles'

const App = () => {
  const [message, setMessage] = useState('');

  const handlePress = () => {
    setMessage('Button was Presses!!!')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Expense Tracker</Text>
      <Button title="Press Me!" onPress={handlePress} />
      {message !== '' && <Text style={styles.text}>{message}</Text>}
    </View>
  )
}

export default App