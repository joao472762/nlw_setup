import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './src/libs/day'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loader } from './src/components/Loader';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })


  return (
    <View className='bg-background flex-1'>
      {fontsLoaded ? <Routes/> : <Loader/> }
      <StatusBar translucent style='light' backgroundColor='transparent' />
    </View>
  );
}

