import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth';

export default function SignUp({ navigation }) {
    const [emailOrNumber, setEmailOrNumber] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    auth()
    .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.Content}>
                <TouchableOpacity style={styles.BackButton} onPress={()=>navigation.goBack()}>
                    <MaterialIcons name='arrow-back-ios-new' size={20} color={'black'} style={styles.Back}/>
                </TouchableOpacity>
                <Text style={styles.Heading}>Let's sign you in.</Text>
                <Text style={styles.SubHeading}>Welcome back, You've been missed.</Text>
                <View style={styles.Button}>
                    <Text style={styles.EmailText}>Email</Text>
                    <TextInput
                        style={styles.email}
                        onChangeText={setEmailOrNumber}
                        value={emailOrNumber}
                        keyboardType='email-address'
                        placeholder='Enter Email'
                        placeholderTextColor="lightgrey"
                    />
                    <Text style={styles.passwordText}>Password</Text>
                    <TextInput
                        style={styles.password}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                        placeholder='Password'
                        placeholderTextColor="lightgrey"
                    />
                    <Text style={styles.passwordText}>Confirm Password</Text>
                    <TextInput
                        style={styles.password}
                        onChangeText={setConfirmPassword}
                        value={ConfirmPassword}
                        secureTextEntry
                        placeholder='Password'
                        placeholderTextColor="lightgrey"
                    />
                </View>
                <TouchableOpacity style={styles.ForgotButton}>
                    <Text style={styles.ForgotButtonText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignInButton}>
                    <Text style={styles.SignInButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.OptionText}>or continue with</Text>
                <View style={styles.LogInButtons}>
                    <TouchableOpacity style={styles.LogInButtonsContainer}>
                        <Image
                            style={[styles.LogInIcons, styles.Image]}
                            source={require('./Images/google.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LogInButtonsContainer}>
                        <Image
                            style={styles.LogInIcons}
                            source={require('./Images/apple.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LogInButtonsContainer}>
                        <Image
                            style={styles.LogInIcons}
                            source={require('./Images/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.RegisterButton}>
                    <Text style={styles.RegisterButtonSubText}>Already have an account? </Text>
                    <TouchableOpacity style={styles.RegisterButtonBox} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.RegisterButtonBoxText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 25,
    },
    Content: {
        marginVertical: 20
    },
    Back:{
        marginBottom:30
    },
    Heading: {
        fontSize: 25,
        color: 'black',
        fontWeight: '500'
    },
    SubHeading: {
        fontSize: 16,
        marginVertical: 5,
        color: 'grey',
    },
    Button: {
        marginTop: 40
    },
    EmailText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    email: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        marginVertical: 10
    },
    passwordText: {
        marginTop: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    password: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        marginVertical: 10
    },
    ForgotButton: {
        marginVertical: 10
    },
    ForgotButtonText: {
        textAlign: 'right',
        color: '#384DE7',
        fontWeight: '500',
        fontSize: 15
    },
    SignInButton: {
        alignItems: 'center',
        backgroundColor: '#384DE7',
        borderRadius: 20,
        paddingVertical: 15,
        marginTop: 20
    },
    SignInButtonText: {
        color: 'white',
        fontSize: 17
    },
    OptionText: {
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 16
    },
    LogInButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    LogInButtonsContainer: {
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingVertical: 10
    },
    LogInIcons: {
        width: 30,
        height: 30,
        resizeMode: 'center',
    },
    RegisterButton: {
        flexDirection: 'row',
        marginTop: 70,
        justifyContent: 'center'
    },
    RegisterButtonSubText: {
        fontSize: 15.8
    },
    RegisterButtonBox: {},
    RegisterButtonBoxText: {
        fontSize: 15.8,
        color: '#384DE7',
        fontWeight: '500'
    }
});
