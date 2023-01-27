import React from 'react';
import { View, Text } from 'react-native';
import { EmotionVerses } from '../lib/EmotionVerses';
import tw from 'tailwind-react-native-classnames';

export function EmotionDuaCard({ value }) {
  const findingEmotion = EmotionVerses.find((emotion) => emotion.id == value);

  return (
    <View style={tw`mx-4`}>
      {findingEmotion && (
        <View style={tw`bg-pink-200 rounded-md p-3 my-10 w-full mx-auto`}>
          <Text style={tw`text-lg font-semibold text-center`}>
            {findingEmotion?.title}
          </Text>
          <Text style={tw`text-sm mt-1 mb-3 text-center`}>
            {findingEmotion?.sub_title}
          </Text>
          <Text style={tw`text-2xl my-4 text-right`}>
            {findingEmotion?.arabic}
          </Text>
          <Text style={tw`text-xl mt-2 mb-4 text-right`}>
            {findingEmotion?.urdu_translation}
          </Text>
          <Text style={tw`text-lg text-left my-2`}>
            {findingEmotion?.english_translation}
          </Text>
          <Text style={tw`text-sm mt-2 text-gray-600 text-center`}>
            {findingEmotion?.reference}
          </Text>
        </View>
      )}
    </View>
  );
}
