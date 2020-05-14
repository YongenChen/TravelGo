/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {CardSection} from './common/CardSection';

class BPText extends Component {
  render() {
    return (
      <View style={{paddingTop: 10}}>
        <CardSection />
        <CardSection />
        <CardSection>
          <Text style={{fontSize: 20, fontFamily: 'Arial', fontWeight: '900'}}>
            San Jose State University
          </Text>
          <Text style={{fontSize: 15}}> 7.5 miles away</Text>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 20, fontFamily: 'Arial', fontWeight: '900'}}>
            Lee's Sandwiches
          </Text>
          <Text style={{fontSize: 15}}> 3.5 miles way</Text>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 20, fontFamily: 'Arial', fontWeight: '900'}}>
            Boiling Point
          </Text>
          <Text style={{fontSize: 15}}> 10.1 miles away</Text>
        </CardSection>
      </View>
    );
  }
}

export default BPText;
