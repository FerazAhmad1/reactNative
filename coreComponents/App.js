import { View, Text } from "react-native";

export default function app() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Text style={{ color: "red", margin: "50px" }}>
        Hello from mobile app
      </Text>
    </View>
  );
}
