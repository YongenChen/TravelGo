/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { favoritesUpdate, favoritesCreate } from '../actions';
import {Card, CardSection, Button} from './common';
import FavoritesForm from './FavoritesForm';

class CreateFavorite extends Component {
onButtonPress() {
  const { place, distance } = this.props;

  this.props.favoritesCreate({ place, distance});
}

  render() {
    return (
      <Card>
        <FavoritesForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { place, distance } = state.favoritesForm;

  return { place, distance };
};

export default connect(mapStateToProps,
  { favoritesUpdate, favoritesCreate }
  )(CreateFavorite);
