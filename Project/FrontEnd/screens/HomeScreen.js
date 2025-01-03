import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-xl font-bold">Home Screen</Text>
      
      <View className="bg-blue-500 p-4 rounded-lg mt-4">
        <Text className="text-white text-lg font-bold">
          Welcome to Tailwind!
        </Text>
      </View>
    </View>
  );
}
