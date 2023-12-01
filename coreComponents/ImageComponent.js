import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import tshirt from "./assets/Tshirt4.jpg";
import logoImage from "./assets/adaptive-icon.png";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function TextComponent() {
  return (
    <View>
      <Image source={logoImage} style={{ width: 100, height: 100 }} />
      <Image
        source={{ uri: "https://picsum.photos/640/360" }}
        style={{ width: 100, height: 100 }}
      />
      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text style={{ color: "white", fontSize: 20 }}>Image Text</Text>
      </ImageBackground>
    </View>
  );
}
