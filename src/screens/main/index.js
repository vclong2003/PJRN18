import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const MainScreen = () => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}>
      <View style={{flex: 1, backgroundColor: 'white', display: 'flex'}}>
        <View style={{flex: 3}}>
          <View style={{flex: 3}}>
            <View
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontSize: 14}}>Today, May 7th, 2021</Text>
              <View style={{display: 'flex', alignItems: 'center'}}>
                <Text style={{fontSize: 40, fontWeight: '700'}}>Barcelona</Text>
                <Text style={{fontSize: 20}}>Spain</Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  width: 230,
                  height: 230,
                  borderRadius: 240,
                }}></View>
            </View>
          </View>
          <View style={{flex: 1.2, backgroundColor: 'green'}}></View>
        </View>
        <View style={{flex: 1.1, backgroundColor: 'white'}}></View>
      </View>
    </LinearGradient>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
