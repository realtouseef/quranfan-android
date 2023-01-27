import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import tw from 'twrnc';
import { EmotionDropdownOptions } from '../lib/EmotionDropdownValues';
import { EmotionDuaCard } from '../components/EmotionDuaCard';
import SelectDropdown from 'react-native-select-dropdown';

const EmotionVersesScreen = () => {
  const [value, setValue] = useState(null);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
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
            onSelect={(selectedItem) => {
              setValue(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem.title;
            }}
            rowTextForSelection={(item) => {
              return item.title;
            }}
            buttonStyle={tw`w-full bg-pink-100 rounded-md mt-3`}
            defaultButtonText='Select an Emotion'
            dropdownStyle={tw`rounded-b-md bg-pink-200`}
            rowTextStyle={tw`text-left pl-2 text-gray-800`}
            selectedRowStyle={tw`bg-pink-300`}
            rowStyle={tw`border-pink-300`}
            statusBarTranslucent={true}
          />
        </View>
        <EmotionDuaCard value={value?.id} />
      </ScrollView>
    </View>
  );
};

export default EmotionVersesScreen;
