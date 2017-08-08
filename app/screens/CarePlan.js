import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class CarePlan extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Primary Doctor"
          />
          <ListItem
            title="OBGYN"
          />
          <ListItem
            title="Surgeon"
          />
        </List>
        <List>

        </List>
      </ScrollView>
    );
  }
}

export default CarePlan;
