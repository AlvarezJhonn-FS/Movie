import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-web";

const InputCard = () => {
  return (
    <View style={styles.inputCard}>
      <Text style={styles.title}>Movie Input</Text>
      <p>Movie Name</p>
      <TextInput style={styles.input} placeholder="Movie Title" value="Type a Movie..." />
      <p>Genre</p>
      <TextInput style={styles.input} placeholder="Movie Title" value="Type a Genre..." />
      <p>Actor</p>
      <TextInput style={styles.input} placeholder="Movie Title" value="Type an Actor..." />
        <button style={styles.submit}>Submit</button>
      <div style={styles.details}>
        <h3>Details</h3>
        <p>Title: </p>
        <p>Genre: </p>
        <p>Actor: </p>

      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCard: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: "16px",
    width: "60%",
    height: "60vh",
    color: "#D6DCE5",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  input : {
    borderRadius:"12px",
    width: "50%",
    height: 50,
    borderColor: "black",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderColor: "rgba(255, 255, 255, 0.15)",
    color: "#AAB4C0"
  },
  submit: {
    width: "8rem",
    height: "2rem",
    borderRadius: "12px",
    backgroundColor: "#005AE0",
    border: "none",
    color: "#FFFFFF"
  }

});

export default InputCard;
