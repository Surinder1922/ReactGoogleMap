import React, { Component } from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions, Button,TouchableOpacity } from "react-native";
import RNGooglePlaces from 'react-native-google-places';
const { width, height } = Dimensions.get('window')
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

export default class MyMap extends React.Component {
    constructor() {
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
    // componentWillMount() {
    //     setTimeout()
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    //     },
    //         (error) => this.setState({ error: error.message })


    //     );
    // }

        // Google Places Search Places Funcion

        openSearchModal() {
            RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                console.log(place);
               this.setState({latitude:place.latitude,longitude:place.longitude})
               this.render
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
          }


    render() {

        const { region } = this.props;
        console.log(region);

        return (
            <View style={styles.container}>

             
                <MapView style={{marginTop:'2%'}}
                    showsUserLocation

                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {this.state.Markers.map((item, id) => {
                        return (<MapView.Marker pinColor='blue' key={id} coordinate={
                            { latitude: item.coordinate.Lat, longitude: item.coordinate.Long }} />)
                    })}
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
                <View style={{alignItems:'center' ,padding:5,backgroundColor:'black' ,height:40,width:Dimensions.get('window').width}}>
                            <TouchableOpacity onPress={this.openSearchModal}>
                                    <Text style={{fontSize:20, color:'red'}}>Pick Another Place </Text>
                                </TouchableOpacity>
                       </View>
            </View>
        );
    }
}