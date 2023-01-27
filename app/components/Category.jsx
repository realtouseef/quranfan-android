import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const CATEGORY_OPTIONS = [
  { key: 'graveSins', title: 'Grave Sins' },
  { key: 'shaytanTricks', title: 'Shaytan Tricks' },
  { key: 'adviceFromQuran', title: `100 Pieces of Advice from Qur'an` },
];

export default function Category() {
  return (
    <View style={tw`pl-2 mt-10`}>
      <Text style={tw`font-semibold text-lg mb-4`}>Category</Text>

      <View style={tw`flex-row flex-wrap`}>
        {CATEGORY_OPTIONS.map(({ key, title }) => (
          <View
            key={key}
            style={tw`mx-auto ${
              key === 'adviceFromQuran'
                ? 'w-full bg-purple-500'
                : 'w-38 bg-purple-100'
            }   h-32 mb-4 rounded-2xl p-2`}
          >
            <Text
              style={tw`mt-auto text-center font-semibold ${
                key === 'adviceFromQuran'
                  ? 'text-white text-lg'
                  : 'text-gray-800'
              }`}
            >
              {title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
