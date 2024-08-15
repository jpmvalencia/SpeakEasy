import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
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
