import React,{Component} from 'react';
import{ StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
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

module.exports = styles
