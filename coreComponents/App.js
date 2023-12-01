import { View, Text, ImageBackground } from "react-native";
import Hello from "./TextComponent";
import ImageComponent from "./ImageComponent";
import logoImage from "./assets/adaptive-icon.png";
export default function app() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Hello />
      <ImageComponent />
      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text style={{ color: "white", fontSize: 20 }}>Image Text</Text>
      </ImageBackground>
    </View>
  );
}
