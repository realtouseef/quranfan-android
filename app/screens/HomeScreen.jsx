import React, { useEffect } from 'react';
import { Text, Pressable, View, SafeAreaView, ScrollView } from 'react-native';
import tw from '../lib/tailwind';
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
    color: 'bg-card-primary',
    text: 'text-quran-primary',
  },
  {
    name: 'Daily Verses',
    key: 'Daily Verses',
    color: 'bg-card-secondary',
    text: 'text-quran-white',
  },
  {
    name: 'Random Verses',
    key: 'Random Verses',
    color: 'bg-card-tertiary',
    text: 'text-quran-primary',
  },
  {
    name: 'Tasbeeh',
    key: 'Tasbeeh',
    color: 'bg-card-fourth',
    text: 'text-quran-primary',
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

    if (key === 'graveSins') {
      navigation.navigate('graveSins');
    }

    if (key === 'shaytanTricks') {
      navigation.navigate('shaytanTricks');
    }

    if (key === 'adviceFromQuran') {
      navigation.navigate('adviceFromQuran');
    }
    if (key === 'Random Verses') {
      navigation.navigate('Random Verses');
    }
    if (key === 'Tasbeeh') {
      navigation.navigate('Tasbeeh');
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
            <View key={key} style={tw`bg-quran-primary rounded-3xl p-4`}>
              <Text style={tw`text-quran-white text-lg font-bold`}>{name}</Text>
              {DAILY_DUAS_VERSES.slice(0, 1).map(
                ({ id, english, reference }) => (
                  <View key={id}>
                    <Text style={tw`my-2 text-quran-white text-base italic`}>
                      {english}
                    </Text>
                    <Text style={tw`text-quran-secondary text-sm font-bold`}>
                      {reference}
                    </Text>
                  </View>
                )
              )}
            </View>
          ))}
        </View>
        <Category goToAnotherScreen={goToAnotherScreen} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
