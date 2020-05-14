/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {CardSection} from './common/CardSection';

class MapLocate extends Component {
  render() {
    return (
      <View style={{paddingTop: 10}}>
        <CardSection />
        <CardSection />
        <CardSection>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Arial',
              fontWeight: '900',
              textAlign: 'center',
              flex: 1,
            }}>
            Sorry, we are still working on this feature!
          </Text>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '500'}}>
            Coming Soon :-)
          </Text>
        </CardSection>
      </View>
    );
  }
}

export default MapLocate;
