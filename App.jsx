import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from './app/screens/HomeScreen';
import EmotionVersesScreen from './app/screens/EmotionVersesScreen';
import DailyVersesScreen from './app/screens/DailyVersesScreen';
import GraveSinsScreen from './app/screens/GraveSinsScreen';
import AdviceFromQuranScreen from './app/screens/AdviceFromQuranScreen';
import ShaytanTricksScreen from './app/screens/ShaytanTricksScreen';
import RandomVersesScreen from './app/screens/RandomVersesScreen';
import TasbeehScreen from './app/screens/TasbeehScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            // backgroundColor: '#00565E',
            backgroundColor: '#fff',
          },
        }}
      >
        <Screen name='quranfan' component={HomeScreen} />
        <Screen name='Emotion Based Verses' component={EmotionVersesScreen} />
        <Screen name='Daily Verses' component={DailyVersesScreen} />
        <Screen name='graveSins' component={GraveSinsScreen} />
        <Screen name='shaytanTricks' component={ShaytanTricksScreen} />
        <Screen name='adviceFromQuran' component={AdviceFromQuranScreen} />
        <Screen name='Random Verses' component={RandomVersesScreen} />
        <Screen name='Tasbeeh' component={TasbeehScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
