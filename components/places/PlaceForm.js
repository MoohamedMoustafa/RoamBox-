import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ControlledInput from "../UI/ControlledInput";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
export default function PlaceForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });
  return (
    <ScrollView style={styles.form}>
      <ControlledInput control={control} name="title" />
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
});
