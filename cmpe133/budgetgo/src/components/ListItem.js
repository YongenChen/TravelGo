import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    Actions.editFavorite({favorite: this.props.favorite});
  }

  render() {
    const {place} = this.props.favorite;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{place}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};
