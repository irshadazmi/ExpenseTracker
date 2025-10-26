import { View, Text, Button } from "react-native";
import React from "react";
import styles from "../styles/styles";
import { NavigationProp } from "@react-navigation/native";

const AnalyticsScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Analytics Screen</Text>
			<Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
		</View>
	);
};

export default AnalyticsScreen;
