import { View, Text, FlatList } from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import { GraveSinsData } from '../lib/GraveSinsData';

export default function GraveSinsScreen() {
  return (
    <View style={tw`android:pt-10`}>
      <Text
        style={tw`mx-4 text-quran-primary font-bold text-lg mb-2 text-center`}
      >
        {GraveSinsData.length} Grave Sins to avoid
      </Text>

      <FlatList
        data={GraveSinsData}
        renderItem={({ item }) => (
          <>
            <View style={tw`bg-quran-secondary mx-4 mb-2 rounded-md p-4`}>
              <Text
                style={tw`text-quran-primary font-bold
            `}
              >
                {item.id}.&nbsp;{item.title}
              </Text>
              <Text style={tw`text-xl mt-1 text-quran-primary`}>
                {item.description}
              </Text>
            </View>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
