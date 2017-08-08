
/**
 * @flow
 */

import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';
import { List, ListItem,Tile } from 'react-native-elements';


const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (

    <View>

  <MyNavScreen banner="Physicans" navigation={navigation} />
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
      </View>

);

const MyNotificationsScreen = ({ navigation }) => (
  <View>
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
    <List>
      <ListItem
        title="Dani"
      />
      <ListItem
        title="Dad"
      />
      <ListItem
        title="Mom"
      />
    </List>
    <List>

    </List>
      </View>
);

const MySettingsScreen = ({ navigation }) => (
  <View>
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
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
      </View>
);

const CustomTabBar = ({ navigation }) => {
  const { routes } = navigation.state;
  return (
    <View style={styles.tabContainer}>
      {routes.map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          style={styles.tab}
          key={route.routeName}
        >
          <Text style={styles.text}>{route.routeName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);
  return (
    <View style={styles.container}>
      <Tile

        featured
        title="Care Team"
        caption="Here to help you"
      />
      <CustomTabBar navigation={navigation} />
      <ActiveScreen
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index],
        })}
      />
    </View>
  );
};

const CustomTabRouter = TabRouter(
  {
    Physicans: {
      screen: MyHomeScreen,
      path: '',
    },
    Family: {
      screen: MyNotificationsScreen,
      path: 'Family',
    },
    Friends: {
      screen: MySettingsScreen,
      path: 'Friends',
    },
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'Physicans',
  }
);

const CareTeam = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 48,
    marginTop:40
  },
  title: {
  paddingBottom: 40,
  },
  text: {
  color: "white",
  fontSize:20
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    color:"white",
    borderWidth: 4,
    borderColor: "#2ccce4",
    backgroundColor:"#2ccce4",
    borderRadius: 40,
  },
});

export default CareTeam;
