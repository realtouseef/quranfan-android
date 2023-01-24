import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import { DailyVerses } from '../lib/DailyVerses';

const DailyVersesScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`pl-5 pt-2 font-semibold max-w-sm`}>
        <Text style={tw`font-semibold`}>
          Available Daily Verses: {DailyVerses.length}
        </Text>
        <Text style={tw`mt-2 text-gray-600`}>
          All of these Duas/verses are taken from either Hadith or Quran.
        </Text>
      </View>
      <FlatList
        data={DailyVerses}
        renderItem={({ item }) => (
          <View style={tw`bg-pink-200 rounded-lg mx-auto mt-4 w-11/12 p-4`}>
            <Text style={tw`text-xs text-center uppercase font-semibold mb-4`}>
              {item.title}
            </Text>
            <Text style={tw`text-right text-xl mb-4`}>{item.arabic}</Text>
            <Text style={tw`text-right text-lg mb-4`}>{item.urdu}</Text>
            <Text style={tw`text-left text-lg mb-2`}>{item.english}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default DailyVersesScreen;
