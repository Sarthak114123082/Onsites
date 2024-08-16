// token =  c-argqXlTVa9k0hCWDKpvY:APA91bHMseRCTRIgpSuZfsxxGf-9pvrjhz5I7kRU0X8v2FXawEmMpMNpelnrMk0AfLrqSk_IQEkH1fMh3_ky0iEvJ-BG4S_ctTNINVqXOiG70BzOqa1PF_dNx2N525p0vBdq9alPflQA

import React,{useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './Screens/Index';
import Main from './Screens/Main';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import messaging from '@react-native-firebase/messaging';
import Profile from './Screens/Profile';

const Stack = createNativeStackNavigator();

function App() {

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken ()
    console.log("Token = ", token)
  }

  useEffect(()=>{
    requestUserPermission()
    getToken()
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;