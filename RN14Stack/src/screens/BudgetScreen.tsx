import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import { NavigationProp } from '@react-navigation/native';

const BudgetScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Screen</Text>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  )
}

export default BudgetScreen