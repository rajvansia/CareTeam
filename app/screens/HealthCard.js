import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  View,
  Button,
} from 'react-native';
import TotalCard from '../Ui/HealthCard.js'

export default class HealthCard extends Component {

  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView
            automaticallyAdjustContentInsets={false}
          >

          <View style = {styles.container} >

                    <Button
                      title="Care Team"
                      buttonStyle={{ marginTop: 20 }}
                      onPress={this.handleSettingsPress}
                    />
                    <View>
        <TotalCard
              styles = {{card: [styles.card,{backgroundColor:"#2ccce4"}]}}
              title = "Mindfull Eating"
              image = 'https://png.icons8.com/vegan-food/win10/86'
              value = "33 meals"
              date = "9/3/17"
            />
        </View>

            <TotalCard
              styles = {{card: [styles.card, {backgroundColor:"#dce775"}]}}
              title = "Mood"
              image = "https://png.icons8.com/mental-state/win10/86"
              value = "Happy"
              date = "9/3/17"
            />

            <TotalCard
              styles = {{card: [styles.card, {backgroundColor:"#ba68c8"}]}}
              title = "Weight"
              image = "https://png.icons8.com/scale/win10/86"
              value = "165 Pounds"
              date = "9/3/17"
            />

            <TotalCard
              styles = {{card: [styles.card, {backgroundColor:"#37d67a"}]}}
              title = "Blood Pressure"
              image = "https://png.icons8.com/heart-health/win10/86"
              value = "120/80"
              date = "9/3/17"
            />

        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
//   transparentButton: {
//     marginTop: 30,
//     borderColor: 'black',
//     borderWidth: 2,
//     padding: 100,
//     marginLeft: 20,
//     marginRight: 20,
//
// },
  card: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },

  dateTop: {
    borderBottomColor: 'black',
    borderTopWidth: 2,
  },

  image: {
    width: 69,
    height: 69,

},
  container: {
    flex: 1,
    paddingBottom: 50,
    paddingTop: 50,
    backgroundColor: '#d9e3f0',
  },
  title: {
    fontSize: 30,
    paddingBottom: 10,
    padding: 20
  },

  date: {
    paddingLeft: 20

  },

imageValue: {
    paddingLeft: 20,
    flex: 1,
    flexDirection: "row",
    paddingBottom: 10
},

  value: {
    fontSize: 25,
    alignItems:"center",
    justifyContent:"center",
    paddingBottom: 20,
    marginTop: 20,
    marginLeft: 6

  },
});
