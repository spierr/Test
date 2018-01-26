import React, {Component} from 'react'
import {AppRegistry, View , Text} from 'react-native';
import { Header } from './src/components/index.js';
import firebase from 'firebase';


export default class App extends Component {
  componentWillMount(){
  firebase.initializeApp({
    apiKey: "AIzaSyD5O9iRieTQ8Lh-h56GniWI045Q-rhoH70",
    authDomain: "auth-app-gerencial.firebaseapp.com",
    databaseURL: "https://auth-app-gerencial.firebaseio.com",
    projectId: "auth-app-gerencial",
    storageBucket: "auth-app-gerencial.appspot.com",
    messagingSenderId: "650816625787"
  });
  }
    render() {
      return (
        <View>
        <Header headerText= "Holi" />>
          <Text>Open up App.js!</Text>
        </View>
      );
    }
}
