import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {favoritesUpdate} from '../actions';
import {CardSection, Input} from './common';

class FavoritesForm extends Component {
  render() {
    return (
      <View>
        <CardSection />
        <CardSection />
        <CardSection>
          <Input
            label="Place"
            placeholder="ex. UNIQLO"
            value={this.props.place}
            onChangeText={(value) =>
              this.props.favoritesUpdate({prop: 'place', value})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Distance"
            placeholder="ex. 7.89 miles away"
            value={this.props.distance}
            onChangeText={(value) =>
              this.props.favoritesUpdate({prop: 'distance', value})
            }
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {place, distance} = state.favoritesForm;

  return {place, distance};
};

export default connect(mapStateToProps, {favoritesUpdate})(FavoritesForm);
