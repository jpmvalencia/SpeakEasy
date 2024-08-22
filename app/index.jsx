import { Image, View, Text, ScrollView } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[80vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-nbold text-center">
              ¡Aprendamos juntos con{" "}
              <Text className="text-secondary-200 font-nblack">SpeakEasy</Text>!
            </Text>
          </View>

          <CustomButton
            title={"¡Comenzemos!"}
            handlePress={() => router.push("/sign-in")}
            containerStyles={"w-full mt-7"}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#1D2D4C" style="light" />
    </SafeAreaView>
  );
};

export default App;
