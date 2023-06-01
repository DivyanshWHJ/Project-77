import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Homescreen from './Screens/Homescreen';
import Isslocation from './Screens/isslocation';
import Meteor from './Screens/meteor';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Homescreen}></Stack.Screen>
        <Stack.Screen name = "IssLocation" component={Isslocation}></Stack.Screen>
        <Stack.Screen name  = "Meteors" component={Meteor}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
