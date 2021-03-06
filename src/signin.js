import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image,
  Button } from 'react-native';
  import Icon from '../img/empireimage.jpg';

  
export default class Signin extends Component {
  
  render () {
    return (
      <View>
        <Image style={styles.icon}
          source={Icon}/>
        <TextInput style={styles.input}
          placeholder="Username" />
        <TextInput style={styles.input}
          placeholder="Password" />
        <View style={styles.footer}>
          <Button style={styles.button}
            title="Sign In"
            color="orange" />
          <Text style={styles.text}>Don't have an account? Sign up</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: -100,
    marginBottom: 50
  },
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