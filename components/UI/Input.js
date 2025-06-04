import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "./../../constansts/colors";

export default function Input({ label, value, onChange, onBlur }) {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <View>
      <Text style={styles.label}>{capitalize(label)}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangesText={onChange}
        onBlur={onBlur}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
