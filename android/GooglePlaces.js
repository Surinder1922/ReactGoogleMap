import RNGooglePlaces from 'react-native-google-places';
import React,{ Component } from "react";
import { View,Text,TouchableOpacity ,Dimensions} from "react-native";
export default class  GooglePlaces extends Component {
    
  
    render() {
      return (
        <View style={{flex:1 ,backgroundColor:'white'}}>
          <TouchableOpacity
            style={{width:Dimensions.get('window').width}}
            onPress={() => this.openSearchModal()}
          >
            <Text>Pick a Place</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }