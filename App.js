import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

import Camera from './screen/Camera';
import AccueilScreen from './screen/AccueilScreen'
import PhotoScreen from './screen/PhotoScreen'

// navigator
const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={ AccueilScreen } />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{title: 'Bienvenue'}}
        />
        <Stack.Screen name="Photo" component={ PhotoScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;