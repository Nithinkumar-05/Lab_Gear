import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';

export default function SplashScreen({ navigation }) {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animate progress bar
    Animated.timing(progress, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    // Navigate after animation
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation, progress]);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image 
        source={require('../assets/lab_gear.jpg')} 
        className="w-[150px] h-[150px]"
        resizeMode="contain"
      />
      
      {/* Progress bar container */}
      <View className="w-[200px] h-[3px] bg-gray-200 rounded-full mt-8 overflow-hidden">
        <Animated.View 
          className="h-full bg-[#6c63ff] rounded-full"
          style={{
            width: progress.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          }}
        />
      </View>
          
    </View>
  );
}