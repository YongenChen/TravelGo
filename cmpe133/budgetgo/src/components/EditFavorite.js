import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import FavoritesForm from './FavoritesForm';
import {favoritesUpdate, favoriteSave, favoritesDelete} from '../actions';
import {Card, CardSection, Button, Confirm} from './common';
import {Actions} from 'react-native-router-flux';

class EditFavorite extends Component {
  state = {showModal: false};
  componentWillMount() {
    _.each(this.props.favorite, (value, prop) => {
      this.props.favoritesUpdate({prop, value});
    });
  }

  onButtonPress() {
    const {place, distance} = this.props;

    this.props.favoriteSave({place, distance, uid: this.props.favorite.uid});
  }

  onAccept() {
    const {uid} = this.props.favorite;

    this.props.favoritesDelete({uid});
  }

  onDecline() {
    this.setState({showModal: false});
    Actions.favoritesPage({type: 'reset'});
  }

  render() {
    return (
      <Card>
        <FavoritesForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({showModal: !this.state.showModal})}>
            Delete Location
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          Are you sure you want to remove this location from your favorites?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {place, distance} = state.favoritesForm;

  return {place, distance};
};

export default connect(mapStateToProps, {
  favoritesUpdate,
  favoriteSave,
  favoritesDelete,
})(EditFavorite);
