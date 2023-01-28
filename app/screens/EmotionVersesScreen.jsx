import React, { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import tw from '../lib/tailwind';
import { EmotionDropdownOptions } from '../lib/EmotionDropdownValues';
import { EmotionDuaCard } from '../components/EmotionDuaCard';
import SelectDropdown from 'react-native-select-dropdown';

const EmotionVersesScreen = () => {
  const [value, setValue] = useState(null);
  return (
    <View style={({ flex: 1 }, tw`android:pt-10`)}>
      <View style={tw`pl-4`}>
        <Text>Back</Text>
      </View>
      <ScrollView>
        <View
          style={tw`bg-quran-secondary rounded-lg mx-auto mt-4 h-56 w-11/12 p-4`}
        >
          <Text style={tw`text-quran-primary text-xl font-semibold	`}>
            Ease your life with the quranic verses
          </Text>
          <Text style={tw`text-quran-primary text-sm mt-2`}>
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
            buttonStyle={tw`w-full bg-quran-primary rounded-md mt-3`}
            buttonTextStyle={tw`text-quran-white`}
            defaultButtonText='Select an Emotion'
            dropdownStyle={tw`rounded-b-md bg-quran-primary`}
            rowTextStyle={tw`text-left pl-2 text-quran-white`}
            selectedRowStyle={tw`bg-quran-secondary`}
            selectedRowTextStyle={tw`text-quran-primary`}
            statusBarTranslucent={true}
          />
        </View>
        <EmotionDuaCard value={value?.id} />
      </ScrollView>
    </View>
  );
};

export default EmotionVersesScreen;
