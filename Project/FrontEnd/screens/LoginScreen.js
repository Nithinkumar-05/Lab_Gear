import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Image 
        source={require('../assets/lab_gear.jpg')} 
        className="w-[200px] h-[200px]"
        resizeMode="contain"
      />
      
      <View className="w-full space-y-4">
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          className="bg-white"
          autoCapitalize="none"
        />
        
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          mode="outlined"
          className="bg-white"
          right={
            <TextInput.Icon 
              icon={showPassword ? "eye" : "eye-off"} 
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <View className="flex-row items-center">
          <Checkbox
            theme={{
              colors: {
                primary: '#000000',
              },
            }}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <Text className="ml-2">Remember me</Text>
        </View>

        <Button 
          mode="contained"
          onPress={() => navigation.replace('Home')}
          className="mt-4"
          contentStyle="py-2"
          theme={{
            colors: {
              primary: '#000000',
            },
          }}
        >
          Login →
        </Button>
      </View>
    </View>
  );
}