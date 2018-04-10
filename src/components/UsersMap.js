import React from 'react';
import { View, StyleSheet, Dimensions, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native';
import MapView from 'react-native-maps';

const screen = Dimensions.get('window');


const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const usersMap = props => {
  let userLocationMarker = null;
  if (props.userLocation) {
    userLocationMarker = <MapView.Marker coordinate={props.userLocation} />
  }
  return (<View style={styles.mapContainer} >
    <MapView
      initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      region={props.userLocation}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}
      onRegionChangeComplete={(region) => {
                    console.log(" region", region)
              }}
      style={styles.map}>
      {userLocationMarker}
      </MapView>

  </View>);
}

const styles = StyleSheet.create({
  mapContainer: {
    marginTop: 20,
    ...StyleSheet.absoluteFillObject,
    height: 300,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // width: '100%',
    // height: '100%',
  }
})

export default usersMap;
