import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import { DailyVerses } from '../lib/DailyVerses';

const DailyVersesScreen = () => {
  return (
    <ScrollView>
      <View style={tw`pl-5 pt-2 font-semibold max-w-sm`}>
        <Text style={tw`font-semibold`}>
          Available Daily Verses: {DailyVerses.length}
        </Text>
        <Text style={tw`mt-2 text-gray-600`}>
          All of these Duas/verses are taken from either Hadith or Quran.
        </Text>
      </View>
      {DailyVerses.map(({ title, arabic, urdu, english, id }) => (
        <View
          style={tw`bg-pink-200 rounded-lg mx-auto mt-4 w-11/12 p-4`}
          key={id}
        >
          <Text style={tw`text-xs text-center uppercase font-bold mb-4`}>
            {title}
          </Text>
          <Text style={tw`text-right text-2xl mb-4`}>{arabic}</Text>
          {urdu && <Text style={tw`text-right text-lg mb-4`}>{urdu}</Text>}
          <Text style={tw`text-left text-lg mb-2`}>{english}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default DailyVersesScreen;
