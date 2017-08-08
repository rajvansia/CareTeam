import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  View,
  ListView,
  Button,
} from 'react-native';
import TotalCard from '../Ui/HealthCard.js'
import styles from './styles.js'


export default class CareList extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };
  onLearnMore = (healthInfo) => {
    this.props.navigation.navigate('Details', { ...healthInfo });
  };

    constructor() {
       super();
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.state = {
         dataSource: ds.cloneWithRows([{date:"9-23-17",title:"Mindful Eating", image:"https://png.icons8.com/vegan-food/win10/86", color: "#2ccce4", value:"33",name: "Raj" }, {title:"Mood", date:"9-3-17",image:"https://png.icons8.com/vegan-food/win10/86", color: "#37d67a",name: "Raj", value:"Happy"}, {title:"Weight", date:"9-3-17",image:"https://png.icons8.com/scale/win10/86", color: "#dce775", value:"165 lbs"}, {title:"Blood Pressure", date:"9-3-17",image:"https://png.icons8.com/heart-health/win10/86", color: "#37d67a", value:"120/80"}]),
       };
     }


    renderRow(rowData, sectionID, rowID){

        return(
          <TouchableHighlight onPress={() => this.onLearnMore(rowData)}>
          <View>
            <TotalCard
              styles = {{card: [styles.card, {backgroundColor:rowData.color}]}}
              title = {rowData.title}
              image = {rowData.image}
              value = {rowData.value}
              date = {rowData.date}
            />
          </View>
        </TouchableHighlight>
        )
      }

      render() {
      return (
        <View style = {styles.container} >

      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}
      />
  </View>
      );
    }
  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
