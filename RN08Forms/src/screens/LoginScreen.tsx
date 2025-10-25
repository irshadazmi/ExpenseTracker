import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        // Add your login logic here
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput style={styles.textInput} placeholder="Enter your Username"
                value = {username} onChangeText={setUsername}
            />
            <TextInput style={styles.textInput} placeholder="Enter your Password"
                secureTextEntry value = {password} onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

export default LoginScreen