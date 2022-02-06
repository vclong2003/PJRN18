import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import SystemNavigationBar from "react-native-system-navigation-bar";
import LinearGradient from 'react-native-linear-gradient';

import React from 'react';

SystemNavigationBar.setNavigationColor("white");

const MainScreen = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#5FC3E4', '#E55D87']}
      style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#5FC3E4" />
      <View style={{flex: 1, display: 'flex'}}>
        <View style={{flex: 3}}>
          <View style={{flex: 3}}>
            <View
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontSize: 14, color: 'white'}}>Today, May 7th, 2021</Text>
              <View style={{display: 'flex', alignItems: 'center'}}>
                <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>Barcelona</Text>
                <Text style={{fontSize: 20, color: 'white'}}>Spain</Text>
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
                  backgroundColor: '#FFFFFFB2',
                  width: 230,
                  height: 230,
                  borderRadius: 240,
                  alignItems: 'center',
                }}>
                <Image source={require('../../assets/icons/rain_1.png')} style={{width: '20%', height: '20%', marginTop: 20}}/>
                  <Text style={{color: '#000000', fontSize: 80, fontWeight: '300'}}>10°C</Text>
                </View>
            </View>
          </View>
          <View
            style={{
              flex: 1.2,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '700', fontSize: 16, color: 'white'}}>
                  Wind status
                </Text>
                <View style={{height: 4}} />
                <Text style={{fontWeight: '400', fontSize: 14, color: 'white'}}>7 mph</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Humidity</Text>
                <View style={{height: 4}} />
                <Text style={{fontWeight: '400', fontSize: 14, color: 'white'}}>85%</Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '700', fontSize: 16, color: 'white'}}>
                  Visibility
                </Text>
                <View style={{height: 4}} />
                <Text style={{fontWeight: '400', fontSize: 14, color: 'white'}}>6.4 miles</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '700', fontSize: 16, color: 'white'}}>
                  Air pressure
                </Text>
                <View style={{height: 4}} />
                <Text style={{fontWeight: '400', fontSize: 14, color: 'white'}}>998 mb</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1.2,
            backgroundColor: 'white',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
            
          </View>
      </View>
    </LinearGradient>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
