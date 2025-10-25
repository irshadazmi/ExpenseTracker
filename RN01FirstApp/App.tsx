import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{fontSize: 20}}>Welcome To Expense Tracker</Text>
    </View>
  )
}

export default App