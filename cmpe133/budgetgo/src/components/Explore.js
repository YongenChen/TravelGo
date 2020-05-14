import React, {Component} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

class Explore extends Component {
  render() {
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: 37.8825,
            longitude: -122.4324,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          }}
          style={styles.map}
          showsUserLocation
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
};

export default Explore;
