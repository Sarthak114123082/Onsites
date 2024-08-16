import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Index({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.MainBackground} source={require('./Images/indexImage1.jpg')}>
        <View style={styles.overlay} />
        <View style={styles.MainContent}>
          <View style={styles.MainText}>
            <Text style={styles.MainHeading}>Welcome to,</Text>
            <Text style={styles.MainSubHeading}>IRCTC PNR</Text>
            <Text style={styles.MainSub}>
              Stay updated with the latest information about your train journey to ensure a smooth travel experience.
            </Text>
          </View>
          <View style={styles.ButtonBox}>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.ButtonText}>Enter PNR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.ButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainBackground: {
    flex: 1,
    resizeMode: 'contain',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  MainContent: {
    flex: 1, 
    justifyContent: 'space-between', 
    margin: 20,
  },
  MainText: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  MainHeading: {
    fontSize: 23,
    color: 'white',
    fontWeight: '600',
  },
  MainSubHeading: {
    fontSize: 37,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  MainSub: {
    fontSize: 17,
    color: 'white',
  },
  ButtonBox: {
    marginVertical: 10,
  },
  Button: {
    paddingHorizontal: 80,
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 40,
  },
  ButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
});
