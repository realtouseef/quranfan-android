import React from 'react';
import { Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const DUA_OPTIONS = [
  { name: 'Emotion based Verses', key: 'Emotion Based Verses' },
  { name: 'Daily Verses', key: 'Daily Verses' },
];

const HomeScreen = ({ navigation }) => {
  const goToAnotherScreen = (key) => {
    if (key === 'Emotion Based Verses') {
      navigation.navigate('Emotion Based Verses');
    }

    if (key === 'Daily Verses') {
      navigation.navigate('Daily Verses');
    }
  };

  return (
    <>
      {DUA_OPTIONS.map(({ name, key }) => {
        return (
          <Pressable
            onPress={() => goToAnotherScreen(key)}
            key={name}
            style={tw`bg-pink-200 rounded-lg mx-auto mt-4 h-52 w-4/5`}
          >
            <Text style={tw`mt-auto text-xl`}>{name}</Text>
          </Pressable>
        );
      })}
    </>
  );
};

export default HomeScreen;
