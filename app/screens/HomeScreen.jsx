import React, { useEffect } from 'react';
import { Text, Pressable, View, SafeAreaView, ScrollView } from 'react-native';
import tw from 'twrnc';
import Category from '../components/Category';

const DAILY_DUAS = [{ name: 'Daily dose of remembrance', key: 'Daily Duas' }];
const DAILY_DUAS_VERSES = [
  {
    id: 1,
    english:
      'So do not weaken and do not grieve, and you will be superior if you are [true] believers.',
    reference: '3:139',
  },
  {
    id: 2,
    english:
      'Allah does not charge a soul except [with that within] its capacity.',
    reference: '2:286',
  },
  {
    id: 3,
    english:
      '[Allah] said, Fear not. Indeed, I am with you both; I hear and I see.',
    reference: '20:46',
  },
  {
    id: 4,
    english:
      'And Allah wants to lighten for you [your difficulties]; and mankind was created weak.',
    reference: '4:28',
  },
  {
    id: 5,
    english:
      'And they [i.e., the disbelievers] planned, but Allah planned. And Allah is the best of planners.',
    reference: '3:54',
  },
];

const DUA_OPTIONS = [
  {
    name: 'Emotion based Verses',
    key: 'Emotion Based Verses',
    color: 'bg-red-200',
    text: 'text-gray-900',
  },
  {
    name: 'Daily Verses',
    key: 'Daily Verses',
    color: 'bg-pink-400',
    text: 'text-white',
  },
  {
    name: 'Random Verses',
    key: 'Random Verses',
    color: 'bg-blue-400',
    text: 'text-white',
  },
  {
    name: 'Tasbeeh',
    key: 'Tasbeeh',
    color: 'bg-purple-300',
    text: 'text-white',
  },
];

const HomeScreen = ({ navigation }) => {
  const goToAnotherScreen = (key) => {
    if (key === 'Emotion Based Verses') {
      navigation.navigate('Emotion Based Verses');
    }

    if (key === 'Daily Verses') {
      navigation.navigate('Daily Verses');
    }
  };

  useEffect(() => {
    Math.floor(Math.random() * DAILY_DUAS_VERSES.length);
  }, []);

  return (
    <SafeAreaView style={tw`android:mt-8 px-5`}>
      <ScrollView>
        <View style={tw`flex-row flex-wrap`}>
          {DUA_OPTIONS.map(({ name, key, color, text }) => {
            return (
              <Pressable
                onPress={() => goToAnotherScreen(key)}
                key={name}
                style={tw`${color} font-semibold rounded-3xl mx-auto mt-4 h-40 w-40 rounded-3xl`}
              >
                <Text
                  style={tw`${text} font-semibold mb-auto text-base leading-5 p-4`}
                >
                  {name}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={tw`mt-10`}>
          {DAILY_DUAS.map(({ name, key }) => (
            <View key={key} style={tw`bg-gray-100 rounded-3xl p-4`}>
              <Text style={tw`text-base font-bold`}>{name}</Text>
              {DAILY_DUAS_VERSES.slice(0, 1).map(
                ({ id, english, reference }) => (
                  <View key={id}>
                    <Text style={tw`my-2 text-gray-600 text-base italic`}>
                      {english}
                    </Text>
                    <Text style={tw`text-pink-400 text-sm font-bold`}>
                      {reference}
                    </Text>
                  </View>
                )
              )}
            </View>
          ))}
        </View>
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
