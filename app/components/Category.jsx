import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from '../lib/tailwind';

const CATEGORY_OPTIONS = [
  { key: 'graveSins', title: 'Grave Sins' },
  { key: 'shaytanTricks', title: 'Shaytan Tricks' },
  { key: 'adviceFromQuran', title: `100 Pieces of Advice from Qur'an` },
];

export default function Category({ goToAnotherScreen }) {
  return (
    <View style={tw`pl-2 mt-10`}>
      <Text style={tw`font-bold text-xl mb-4 text-quran-primary`}>
        Category
      </Text>

      <View style={tw`flex-row flex-wrap`}>
        {CATEGORY_OPTIONS.map(({ key, title }) => (
          <Pressable
            key={key}
            style={tw`mx-auto bg-quran-secondary ${
              key === 'adviceFromQuran' ? 'w-full' : 'w-40'
            }   h-36 mb-4 rounded-2xl p-2`}
            onPress={() => goToAnotherScreen(key)}
          >
            <Text
              style={tw`mt-auto text-quran-primary text-center font-bold ${
                key === 'adviceFromQuran' ? ' text-xl' : 'text-lg'
              }`}
            >
              {title}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
