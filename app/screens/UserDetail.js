import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem,Button } from 'react-native-elements';

class UserDetail extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };
  render() {
    const { title, image, date, value,name} = this.props.navigation.state.params;

    return (
      <ScrollView>

        <Tile
          imageSrc={{ uri: image}}
          featured
          title={name}
          caption={title}
        />
        <Button
          title="Historical Data"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />
        <List>
          <ListItem
            title="Total"
            rightTitle={title}
            hideChevron
          />
          <ListItem
            title="Average"
            rightTitle={date}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Goals"
            rightTitle={value}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Daily Log"
            rightTitle={date}
            hideChevron
          />

        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
