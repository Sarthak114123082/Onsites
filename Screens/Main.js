import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Main({ navigation }) {

  const [pnrNumber, setPnrNumber] = useState('');
  const [trainName, setTrainName] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState('');
  const [seat, setSeat] = useState('');

  const getFormattedDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  const validateInputs = () => {
    if (!pnrNumber && (!trainName || !fromLocation || !toLocation || !date || !seat)) {
      Alert.alert('Incomplete Information', 'Please either fill in the PNR number or complete the train details.');
      return false;
    }

    if (pnrNumber && !/^\d{10}$/.test(pnrNumber)) {
      Alert.alert('Invalid PNR', 'Please enter a valid 10-digit PNR number.');
      return false;
    }

    if (trainName || fromLocation || toLocation || date || seat) {
      if (trainName.trim() === '' || fromLocation.trim() === '' || toLocation.trim() === '' || !/^\d{2}-\d{2}-\d{4}$/.test(date) || seat.trim() === '') {
        Alert.alert('Invalid Train Details', 'Please ensure all train details are correctly filled.');
        return false;
      }
    }

    return true;
  };

  const handleSearchTrain = () => {
    if (validateInputs()) {
      ToastAndroid.show('Searching for train...', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./Images/MainBg.png')} style={styles.Main}>
        <View style={styles.IconsBox}>
          <TouchableOpacity style={styles.Icons} onPress={() => navigation.goBack()}>
            <MaterialIcons name='arrow-back-ios-new' size={25} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Icons2}>
            <MaterialIcons name='notifications-none' size={28} color={'white'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.dateText}>{getFormattedDate()}</Text>
        <View style={styles.Location}>
          <MaterialIcons name='location-on' size={20} style={styles.LocationIcon} />
          <Text style={styles.LocationText}>Indore, India</Text>
        </View>
        <View style={styles.Heading}>
          <Text style={styles.HeadingText}>Where do you want to go?</Text>
          <Text style={styles.HeadingSubText}>Explore new place, Get new experience</Text>
        </View>
        <View style={styles.PNRBOX}>
          <View style={styles.WhiteContentTextHeading}>
            <TouchableOpacity style={styles.CurrentOptions}>
              <Text style={styles.WhiteContentTextHeadingCurrentText}>PNR Number</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.email}
            onChangeText={setPnrNumber}
            value={pnrNumber}
            keyboardType='numeric'
            placeholder='PNR number'
            placeholderTextColor="lightgrey"
          />
          <TouchableOpacity style={styles.Button} onPress={handleSearchTrain}>
            <Text style={styles.ButtonText}>Search Train</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.OR}>Or</Text>
        <View style={styles.PNRBOX}>
          <View style={styles.WhiteContentTextHeading}>
            <TouchableOpacity style={styles.CurrentOptions}>
              <Text style={styles.WhiteContentTextHeadingCurrentText}>Train details</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.email}
            onChangeText={setTrainName}
            value={trainName}
            keyboardType='default'
            placeholder='Train Name'
            placeholderTextColor="lightgrey"
          />
          <TextInput
            style={styles.email}
            onChangeText={setFromLocation}
            value={fromLocation}
            keyboardType='default'
            placeholder='From'
            placeholderTextColor="lightgrey"
          />
          <TextInput
            style={styles.email}
            onChangeText={setToLocation}
            value={toLocation}
            keyboardType='default'
            placeholder='To'
            placeholderTextColor="lightgrey"
          />
          <View style={styles.DateSeat}>
            <TextInput
              style={styles.DateSeatText}
              onChangeText={setDate}
              value={date}
              keyboardType='default'
              placeholder='Date (DD-MM-YYYY)'
              placeholderTextColor="lightgrey"
            />
            <TextInput
              style={styles.DateSeatText}
              onChangeText={setSeat}
              value={seat}
              keyboardType='default'
              placeholder='Seat'
              placeholderTextColor="lightgrey"
            />
          </View>
          <TouchableOpacity style={styles.Button} onPress={handleSearchTrain}>
            <Text style={styles.ButtonText}>Search Train</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Main:{
        flex:1,
        resizeMode:'cover',
        paddingTop:30
    },
    IconsBox:{
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    Icons2:{
        borderWidth:1,
        padding:5,
        borderRadius:20,
        borderColor:'white'
    },
    dateText:{
        marginHorizontal:25,
        marginTop:20,
        fontSize:18,
        color:'white',
        fontWeight:'600'
    },
    Location:{
        marginHorizontal:25,
        marginVertical:4,
        flexDirection:'row',
        alignItems:'center'
    },
    LocationIcon:{},
    LocationText:{
        color:'white',
        fontSize:16,
        marginLeft:5       
    },
    Heading:{
        marginHorizontal:25,
        marginTop:4,
        marginTop:15
    },
    HeadingText:{
        color:'white',
        fontSize:18,
        marginLeft:5,
        fontWeight:'bold'   
    },
    HeadingSubText:{
        color:'lightgrey',
        fontSize:16,
        marginLeft:5    
    },
    WhiteContentTextHeading:{
        marginHorizontal:25,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8
    },
    CurrentOptions:{
        paddingHorizontal:12,
        paddingVertical:6,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        borderRadius:10,
    },
    Options:{
        marginLeft:10
    },
    WhiteContentTextHeadingCurrentText:{
        fontSize:15,
        color:'black',
        fontWeight:'500'
    },
    WhiteContentTextHeadingText:{
        color:'grey',
        fontSize:15,
        fontWeight:'500'
    },
    PNRBOX:{
        backgroundColor:'white',
        paddingVertical:20,
        marginVertical:15,
        borderRadius:20,
        marginHorizontal:25
    },
    email:{
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        marginVertical: 10,
        marginHorizontal:25
    },
    Button:{
        marginHorizontal:25,
        marginVertical:10,
        paddingVertical:10,
        backgroundColor:'#2152D0',
        borderRadius:10,
        alignItems:'center'
    },
    ButtonText:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
    OR:{
        textAlign:'center',
        fontSize:17,
        color:'white'
    },
    DateSeat:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    DateSeatText:{
        borderRadius: 10,
        paddingHorizontal: 40,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        marginVertical: 10,
    }
})