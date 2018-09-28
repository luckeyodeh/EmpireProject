import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image,
  Button } from 'react-native';

  
export default class Signup extends Component {
  
  render () {
    return (
      <View>
        <TextInput style={styles.input}
          placeholder="Full Name" />
          <TextInput style={styles.input}
          placeholder="Email" />
          <TextInput style={styles.input}
          placeholder="Phone Number" />
        <TextInput style={styles.input}
          placeholder="Username" />
        <TextInput style={styles.input}
          placeholder="Password" />
        <View style={styles.footer}>
          <Button style={styles.button}
            title="Sign Up"
            color="orange" />
          <Text style={styles.text}>Have an account? Sign in</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 4,
    height: 40,
    borderColor: 'grey',
    borderBottomWidth: 1,
    //borderRadius: 5,
    width: 300,
    margin: 5,
    alignSelf: 'center'
  },
  text: {
    color: 'white',
    alignSelf: 'center'
  },
  footer: {
    
  }
})