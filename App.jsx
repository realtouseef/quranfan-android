import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'tailwind-react-native-classnames';

// screens
import HomeScreen from './app/screens/HomeScreen';
import EmotionVersesScreen from './app/screens/EmotionVersesScreen';
import DailyVersesScreen from './app/screens/DailyVersesScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={tw`bg-white flex-1`}>
        <Navigator screenOptions={{ headerShown: true }}>
          <Screen name='quranfan' component={HomeScreen} />
          <Screen name='Emotion Based Verses' component={EmotionVersesScreen} />
          <Screen name='Daily Verses' component={DailyVersesScreen} />
        </Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
