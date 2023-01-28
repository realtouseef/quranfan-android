import React from 'react';
import { View, Text } from 'react-native';
import tw from '../lib/tailwind';
import { ShaytanTricksData } from '../lib/ShaytanTricksData';

export default function ShaytanTricksScreen() {
  return (
    <View style={tw`android:pt-10`}>
      <Text>ShaytanTricks</Text>
      <View>
        {ShaytanTricksData.map(({ id, description, arabic, reference }) => (
          <View key={id}>
            <Text>{arabic}</Text>
            <Text>{description}</Text>
            <Text>{reference}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
