import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { EmotionDropdownOptions } from '../lib/EmotionDropdownValues';
import { EmotionDuaCard } from '../components/EmotionDuaCard';
import SelectDropdown from 'react-native-select-dropdown';

const EmotionVersesScreen = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ height: '100%' }}>
        <View style={tw`bg-pink-200 rounded-lg mx-auto mt-4 h-52 w-11/12 p-4`}>
          <Text style={tw`text-xl font-semibold	`}>
            Ease your life with the quranic verses
          </Text>
          <Text style={tw`mt-2`}>
            Feeling Sad, Depressed, or Hopeless and don't know what to recite?
            Don't worry, we have got you covered.
          </Text>
          <SelectDropdown
            data={EmotionDropdownOptions}
            buttonStyle={tw`w-full bg-pink-300 mt-4 rounded-sm`}
            buttonTextStyle={tw`text-left`}
            defaultButtonText='Select an Emotion'
            dropdownStyle={tw`bg-pink-300 rounded-b-md`}
            rowTextStyle={tw`text-left pl-2`}
            selectedRowStyle={tw`bg-pink-400`}
            onSelect={(selectedItem) => {
              setSelectedValue(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem.title;
            }}
            rowTextForSelection={(item) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item.title;
            }}
          />
        </View>
        <EmotionDuaCard value={selectedValue?.id} />
      </ScrollView>
    </View>
  );
};

export default EmotionVersesScreen;
