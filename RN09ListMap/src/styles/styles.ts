import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  // Text styles
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 8,
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    color: '#444444',
    marginVertical: 8,
    lineHeight: 22,
  },

  // Input styles
  textInput: {
    width: '100%',
    fontSize: 16,
    color: '#000000',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#FAFAFA',
  },

  // Button container (used with TouchableOpacity or Pressable)
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // Generic view block
  card: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default styles;