import { StyleSheet, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constansts/colors";

export default function LocationPicker() {
  function handleGetLocation() {}
  function handlePickOnMap() {}
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={handleGetLocation}>
          Locate Me
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={handlePickOnMap}>
          Choose On Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
