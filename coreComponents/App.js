import { View, Text } from "react-native";
import Hello from "./TextComponent";
import ImageComponent from "./ImageComponent";
export default function app() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Hello />
      <ImageComponent />
    </View>
  );
}
