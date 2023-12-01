import { View, Text, ImageBackground, ScrollView, Button } from "react-native";
import Hello from "./TextComponent";
import ImageComponent from "./ImageComponent";
import logoImage from "./assets/adaptive-icon.png";
export default function app() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Hello />
      <ImageComponent /> */}
      <Button
        title="press"
        onPress={() => console.log("i got press")}
        color="midnightblue"
        disabled
      />
    </View>
  );
}
