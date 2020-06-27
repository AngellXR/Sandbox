import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class angellxr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('caroline.jpg')}/>
        <Text
          style={{
            // backgroundColor: '#777879', commented out
            fontSize: 0.8,
            fontWeight: '400',
            color: '#bf1363',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          beautiful
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('angellxr', () => angellxr);
