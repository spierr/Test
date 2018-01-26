import React, {Component} from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './index.js';
import firebase from 'firebase'

class LoginForm extends Component {
    state= { email: '', password:'' , error :'', loading:false };

    onButtonPressed = () => {
      const { email, password, error } = this.state;
      this.setState({ error: "", loading: true });
      firebase
        .auth().signInWithEmailAndPassword(email, password)
        .then(this.onLogInSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLogInSuccess.bind(this))
            .catch(this.onLogInFail.bind(this));
        });
    };

    onLogInFail = () =>{
        this.setState({ error :'AuthFailed', loading:false });
    }

    onLogInSuccess = () =>{
        this.setState({ email: '', password:'' , error :'', loading:false });
    }
    
    renderButton()
    {
        if(this.state.loading){
            return(<Spinner size= "small"/>)
        }
       return(
       <Button onPress= {this.onButtonPressed}>
        Log in
      </Button>
      );
    }
  
    render() {
    return (
      <Card>
        <CardSection>
        <Input 
        value= {this.state.email} 
        onChangeText={ email => this.setState( {email} )} 
        label = "Email"
        autoCorrect = {false}
        placeholder = "email@gmail.com"
        />
        </CardSection>

        <CardSection>
        <Input 
        value= {this.state.password} 
        onChangeText={ password => this.setState( {password} )} 
        label = "Password"
        placeholder = "password"
        secureTextEntry
        />
        </CardSection>

        <Text style={styles.errorTextStyle}>
            {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      
      </Card>
    );
  }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;