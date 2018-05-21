import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import MapView,{Marker} from 'react-native-maps';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const styles = StyleSheet.create({
  container: {
      ...StyleSheet.absoluteFillObject,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
  map: {
      ...StyleSheet.absoluteFillObject,
  },
});

export default class CurrentLocation extends Component {constructor() {
  super()
  this.state = {

      latitude: 30.710174,
      longitude: 76.714206,
      latitudeDelta: 0,
      longitudeDelta: 0,
      Markers: [{ id: 0, coordinate: { Lat: 30.710174, Long: 76.714206 } }, { id: 1, coordinate: { Lat: 30.710133, Long: 76.714231 } },
      { id: 2, coordinate: { Lat: 30.710081, Long: 76.714044 } }, { id: 3, coordinate: { Lat: 30.710024, Long: 76.714305 } },
      { id: 4, coordinate: { Lat: 30.710167, Long: 76.714353 } }, { id: 5, coordinate: { Lat: 30.710267, Long: 76.714541 } },
      { id: 6, coordinate: { Lat: 30.710197, Long: 76.714353 } }, { id: 7, coordinate: { Lat: 30.710215, Long: 76.714353 } },
      { id: 8, coordinate: { Lat: 30.710207, Long: 76.714358 } }, { id: 9, coordinate: { Lat: 30.710315, Long: 76.714355 } }
      ]

  }

}

componentWillMount() {

  navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
  },
      (error) => this.setState({ error: error.message })


  );
}


render() {

  const { region } = this.props;
  console.log(region);

  return (
      <View style={styles.container}>
          <MapView
              showsUserLocation

              style={styles.map}
              region={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
              }}
          >
          <Marker
                        coordinate={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude
                        }}
                        image={require('../images/ninja.png')}
                        title={"CS SOFT SOLUTIONS"}
                        description={"A Complete solutions for Mobile and web development"}

                    />
              
          </MapView>
      </View>
  );
}
}