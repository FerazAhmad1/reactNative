import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Button,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import Hello from "./TextComponent";
import ImageComponent from "./ImageComponent";
import logoImage from "./assets/adaptive-icon.png";
import ModalView from "./ModalView";
export default function app() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" />
      <Button title="Alert" onPress={() => Alert.alert("Invalid data")} />
      <Button
        title="Alert2"
        onPress={() =>
          Alert.alert("Invalid data", "DOB Incorect", [
            {
              text: "Cancel",
              onPress: () => console.log("cancel pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("Ok pressed"),
            },
          ])
        }
      />
      <Hello />
      <ImageComponent />
      <ModalView />
    </View>
  );
}
