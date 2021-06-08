import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchNewsData} from '../store/action/fetchdataAction';

const SplashScreen = ({
  navigation,
  route,
  fetchNewsData,
  fetchdataReducer: {isloading, DataList},
}) => {
  useEffect(() => {
    (async () => {
      await fetchNewsData();
   //   console.log(`isloading` + isloading);
     // console.log('DataList', DataList);
    //   setTimeout(() => {
    //     navigation.navigate('HomeScreen');
    //   }, 2000);
    })();
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'blue'}}>
        NEWS APP
      </Text>
    </View>
  );
};
const mapStatetoProps = state => ({
  fetchdataReducer: state.fetchdataReducer,
});
export default connect(mapStatetoProps, {fetchNewsData})(SplashScreen);
