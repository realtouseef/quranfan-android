import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import tw from 'twrnc';

export default function Header({ title }) {
  return (
    <SafeAreaView style={tw`android:pt-2`}>
      <Text style={tw`font-semibold text-lg`}>{title}</Text>
    </SafeAreaView>
  );
}
