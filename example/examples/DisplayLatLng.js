var React = require('react-native');
var {
  StyleSheet,
  View,
  Dimensions,
} = React;

var MapView = require('react-native-maps');

var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 40.409262;
const LONGITUDE = 49.867092;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

var DisplayLatLng = React.createClass({
  getInitialState() {
    return {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  },

  onRegionChange(region) {
    this.setState({ region });
  },

  jumpRandom() {
    this.setState({ region: this.randomRegion() });
  },

  animateRandom() {
    this.refs.map.animateToRegion(this.randomRegion());
  },

  randomRegion() {
    var { region } = this.state;
    return {
      ...this.state.region,
      latitude: region.latitude + (Math.random() - 0.5) * region.latitudeDelta / 2,
      longitude: region.longitude + (Math.random() - 0.5) * region.longitudeDelta / 2,
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref="map"
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
        </MapView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  }
});

module.exports = DisplayLatLng;
