import { View, Text, StyleSheet } from "react-native";

const InputCard = () => {
  return (
    <View style={styles.inputCard}>
      <Text style={styles.title}>Movie Input</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  inputCard: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: "60%",
    height: "50vh",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default InputCard;
