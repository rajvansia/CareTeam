import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Histoical Log"
          />
          <ListItem
            title="Entry 1"
          />
          <ListItem
            title="Entry 2"
          />
        </List>
        <List>

        </List>
      </ScrollView>
    );
  }
}

export default Settings;
