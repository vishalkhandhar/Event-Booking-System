/** @format */

import React from 'react';
import ScreenName from '../Theme/ScreenName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Container/HomeScreen/HomeScreen';
import EventDetailScreen from '../Container/EventDetailScreen/EventDetailScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenName.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={ScreenName.EventDetailScreen}
          component={EventDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
