import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button,FormInput,FormLabel } from 'react-native-elements';
import { me } from '../config/data';

export default class Login extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('CareTeam');
  };

  render() {
    return (
      <ScrollView>


        <Tile
          imageSrc={{ uri: this.props.image}}
          featured
          title='Login'
          caption="Welcome"
        />
        <FormLabel>Name</FormLabel>
        <FormInput
          ref='forminput'
          textInputRef='email'
        />
      <FormLabel>Email</FormLabel>
        <FormInput
          ref='forminput'
          textInputRef='Password'
        />
        <Button
          title="Login"
          buttonStyle={{ marginTop: 20, backgroundColor:"blue" }}
          onPress={this.handleSettingsPress}
        />
        <Button
          title="Sign Up"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

      </ScrollView>
    );
  }
}

Login.defaultProps = { ...me };
