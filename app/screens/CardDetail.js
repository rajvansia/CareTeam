import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const { title, image, date, value} = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: image}}
          featured
          title="Mindful data"
          caption={title}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={title}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={date}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={value}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={date}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={title}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
