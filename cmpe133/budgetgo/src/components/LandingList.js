import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
//import {View, Text} from 'react-native';
import {Card, CardSection, Button} from './common';

class LandingList extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection>
          <Button
            onPress={() => {
              Actions.map();
            }}>
            How far can I go?
          </Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => {
              Actions.favorite();
            }}>
            See my favorites
          </Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => {
              Actions.feedback();
            }}>
            Send feedback to the team
          </Button>
        </CardSection>
      </Card>
    );
  }

  // const styles = {
  //   textStyle: {
  //     fontSize: 20,
  //     fontFamily: 'Arial',
  //     fontWeight: '900',
  //   },
  //   cardSectionStyle: {
  //     height: 150,
  //     width: 60,
  //   },
  // };
}

export default LandingList;
