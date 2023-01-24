import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { EmotionDropdownOptions } from '../lib/EmotionDropdownValues';
import DropdownPicker from '../components/DropdownPicker';

const EmotionVersesScreen = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  return (
    <SafeAreaView style={tw`bg-pink-200 rounded-lg mx-auto mt-4 h-52 w-11/12`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-xl font-semibold	`}>
          Ease your life with the quranic verses
        </Text>
        <Text style={tw`mt-2`}>
          Feeling Sad, Depressed, or Hopeless and don't know what to recite?
          Don't worry, we have got you covered.
        </Text>
        <DropdownPicker options={EmotionDropdownOptions} />
      </View>
    </SafeAreaView>
  );
};

export default EmotionVersesScreen;
