import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MainScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', display: 'flex'}}>
      <View style={{flex: 3, backgroundColor: 'black'}}>
        <View style={{flex: 3, backgroundColor: 'red'}}>
          <View style={{flex: 1, backgroundColor: 'blue'}}></View>
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
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}></View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
