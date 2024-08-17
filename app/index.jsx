import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Link } from "expo-router";

const App = () => {
  const [fontsLoaded, error] = useFonts({
    "Nunito-ExtraLight": require("../assets/fonts/Nunito-ExtraLight.ttf"),
    "Nunito-ExtraLightItalic": require("../assets/fonts/Nunito-ExtraLightItalic.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-LightItalic": require("../assets/fonts/Nunito-LightItalic.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Italic": require("../assets/fonts/Nunito-Italic.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-MediumItalic": require("../assets/fonts/Nunito-MediumItalic.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-SemiBoldItalic": require("../assets/fonts/Nunito-SemiBoldItalic.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-BoldItalic": require("../assets/fonts/Nunito-BoldItalic.ttf"),
    "Nunito-ExtraBold": require("../assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-ExtraBoldItalic": require("../assets/fonts/Nunito-ExtraBoldItalic.ttf"),
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
    "Nunito-BlackItalic": require("../assets/fonts/Nunito-BlackItalic.ttf"),
  });

  return (
    <View>
      <Text>App</Text>
      <Link href="/home">
        <Text>Go to home</Text>
      </Link>
    </View>
  );
};

export default App;
