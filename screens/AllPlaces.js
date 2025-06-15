import { useLayoutEffect } from "react";
import PlacesList from "../components/places/PlacesList";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/UI/IconButton";
import { Text, View } from "react-native";

export default function AllPlaces() {
  const navigation = useNavigation();
  // List of places
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "  Your Favorite Places",
      headerRight: () => (
        <IconButton
          key="please render"
          icon="add"
          size={28}
          color="white"
          onPress={() => navigation.navigate("AddPlace")}
        />
      ),
    });
  }, []);
  return <PlacesList places={[]} />;
}
