import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const router = useRouter()

  if (!loaded) {
    return null;
  }

  return (
    //<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }}/>
        <Stack.Screen name="login" options={{ headerShown: false }}/>
        <Stack.Screen name="register" options={{ headerShown: false }}/>
        <Stack.Screen name="changeName" options={{ headerShown: false, 
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.replace('/(tabs)/home')}
            ><Ionicons style={{fontSize: 28, marginEnd: 15}} name="arrow-back" /></TouchableOpacity>
          ), }}/>
        <Stack.Screen name="chat" options={{
          headerTitleAlign: 'center',
          title: 'AI Ecommerce Mobile',
          headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.replace('/changeName')}
              ><Ionicons style={{fontSize: 28, marginEnd: 15}} name="arrow-back" /></TouchableOpacity>
            ), }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      //<StatusBar style="auto" />
    //</ThemeProvider>
  );
}
