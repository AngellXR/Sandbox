import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class app extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('santoriniSunset.jpg')}/>
        <Text
          style={{
            // backgroundColor: '#777879',commented out
            fontSize: 0.8,
            color: '#bf1363',
            fontWeight: '300',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Santorini, Greece
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
