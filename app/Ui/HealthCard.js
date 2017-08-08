import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native';
import styles from '../CareList/styles.js'

const Title = (props) => {
  return (
    <Text style={styles.title}>
      {props.title}
    </Text>
  );
}

const CardImage = (props) => {
  return(
    <Image style={styles.image} source={{uri: props.image}}/>
  )
}

const CardValue = (props) => {
  return(

  <View >
    <Text style={styles.value}>
      {props.value}
    </Text>
  </View>
  )
}

const CardDate = (props) => {
  return(
    <View style={styles.dateTop}>
    <Text style={styles.date}>
      Last updated {props.date}                           Past Data
    </Text>
  </View>
  )
}

const TotalCard = (props) => {

  return(
    <View style={props.styles.card}>
    <Title title= {props.title} />

    <View style={styles.imageValue}>
    <CardImage image= {props.image} />
    <CardValue value = {props.value} />
    </View>

    <CardDate date= {props.date} />
    </View>
  )
}

export default TotalCard
