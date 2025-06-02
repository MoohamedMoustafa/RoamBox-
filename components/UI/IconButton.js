import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function IconButton({
  icon = "plus",
  color = "black",
  size,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={size} color={color} onPress={onPress} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
