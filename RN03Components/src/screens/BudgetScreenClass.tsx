import React, { Component } from 'react'
import { Text, View } from 'react-native';
import styles from '../styles/styles';

interface BudgetClassProps { }
interface BudgetClassState { balance: number }

export class BudgetScreenClass extends Component<BudgetClassProps, BudgetClassState> {
    constructor(props: BudgetClassProps) {
        super(props);
        this.state = { balance: 1600 }
    }
    render() {
        const { balance } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Budget Screen</Text>
                <Text style={styles.text}>Budget = {balance}</Text>
            </View>
        )
    }
}

export default BudgetScreenClass