import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from './app/screens/HomeScreen';
import EmotionVersesScreen from './app/screens/EmotionVersesScreen';
import DailyVersesScreen from './app/screens/DailyVersesScreen';
import Header from './app/components/Header';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}
      >
        <Screen name='quranfan' component={HomeScreen} />
        <Screen
          name='Emotion Based Verses'
          component={EmotionVersesScreen}
          options={{
            headerTitle: () => <Header title='Emotion Based Verses' />,
          }}
        />
        <Screen name='Daily Verses' component={DailyVersesScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
