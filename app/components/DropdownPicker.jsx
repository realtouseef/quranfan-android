import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import SelectDropdown from 'react-native-select-dropdown';
import { EmotionDuaCard } from '../components/EmotionDuaCard';

export default function DropdownPicker({ options }) {
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <>
      <SelectDropdown
        data={options}
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

      <EmotionDuaCard value={selectedValue?.id} />
    </>
  );
}
