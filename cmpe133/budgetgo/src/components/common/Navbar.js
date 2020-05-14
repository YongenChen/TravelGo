import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {CardSection} from './CardSection';

class NavBar extends Component {
  render() {
    return (
      <CardSection style={styles.cardSectionStyle}>
        <View>
          <Text />
        </View>
      </CardSection>
    );
  }
}
const styles = {
  cardSectionStyle: {
    height: 0,
    backgroundColor: 'white',
  },
};

export default NavBar;
