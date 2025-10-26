import { View, Text, Button } from "react-native";
import React from "react";
import styles from "../styles/styles";
import { NavigationProp } from "@react-navigation/native";

const DashboardScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Dashboard Screen</Text>
			<Button title="Go to Budget"
				onPress={() => navigation.navigate('Budget')} />
			<View style={{ marginTop: 16 }} />
			<Button title="Go to Analytics"
				onPress={() => navigation.navigate('Analytics')} />
		</View>
	);
};

export default DashboardScreen;
