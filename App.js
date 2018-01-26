import React from 'react'
import { View } from 'react-native';
import {Header, Button, Spinner, CardSection} from './src/components/index.js';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';


export default class App extends React.Component {

  state = {loggedIn:null};
 
  componentWillMount()
    {
      firebase.initializeApp({
        apiKey: "AIzaSyD5O9iRieTQ8Lh-h56GniWI045Q-rhoH70",
        authDomain: "auth-app-gerencial.firebaseapp.com",
        databaseURL: "https://auth-app-gerencial.firebaseio.com",
        projectId: "auth-app-gerencial",
        storageBucket: "auth-app-gerencial.appspot.com",
        messagingSenderId: "650816625787"
      });
      firebase.auth().onAuthStateChanged( (user) =>{
        if(user)
          this.setState({loggedIn:true});
        else
          this.setState({loggedIn:false});
      }
      );
    }

    renderContent(){
      if(this.state.loggedIn)
        return(<CardSection><Button onPress={()=> firebase.auth().signOut()}>Log out</Button></CardSection>)
      else if(this.state.loggedIn == false)
        return (<LoginForm />)
      else
        return (<Spinner />)

    }


  render() {
    return (
      <View style= {{ flex:1 }}>
      <Header headerText = 'Auth' />
        {this.renderContent()}
      </View>
    );
  }
}


