import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, FlatList} from 'react-native';
import {favoritesFetch} from '../actions';
import ListItem from './ListItem';
import {CardSection} from './common/CardSection';

class Favorites extends Component {
  componentWillMount() {
    this.props.favoritesFetch();
  }

  render() {
    return (
      <View>
        <CardSection />
        <CardSection />
        <CardSection />
        <FlatList
          data={this.props.favorites}
          renderItem={(favorite) => (
            <ListItem favorite={favorite.item} style={styles.listStyle} />
          )}
          keyExtractor={(favorite) => favorite.uid}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const favorites = _.map(state.favorites, (val, uid) => {
    return {...val, uid};
  });

  return {favorites};
};

const styles = {
  listStyle: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: '900',
  },
};

export default connect(mapStateToProps, {favoritesFetch})(Favorites);
