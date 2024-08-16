import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth, { signOut } from '@react-native-firebase/auth';

export default function Profile({navigation}) {

    auth()
  .signOut()
  .then(() => console.log('User signed out!'));

  return (
    <View>
        <TouchableOpacity onPress={()=>signOut()}>
            <Text>signOuts</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})