import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Header } from "react-native-elements";
import { render } from "react-dom";



export class MyBookings extends Component {


  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <View>
        <Header style={{ height: 20, width: 200 }}
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: '', style: { color: '#fff' } }}
          rightComponent={{
            icon: 'home', color: '#fff'
          }}
        />
        <View style={{ paddingTop: 20 }}></View>


        <View style={styles.rectanglemain}>
          <Text style={styles.Mobiletext}>Name: Mobile Repair workshop</Text>
          <Text style={styles.Mobileinnertext}>Category:skill development</Text>
          <Text style={styles.Mobileinnertext}>Requested By: Name</Text>
          <Text style={styles.Mobileinnertext}>Duration:1 Month</Text>
          <View style={styles.confirm}>
            <Button

              title="View"
              color="#ff5c5c"
              type="clear"
            />
          </View>
        </View>
        <View style={{ paddingTop: 20 }}></View>


        <View style={styles.rectanglemain}>

          <Text style={styles.Mobiletext}>Name: Mobile Repair workshop</Text>
          <Text style={styles.Mobileinnertext}>Category:skill development</Text>
          <Text style={styles.Mobileinnertext}>Requested By: Name</Text>
          <Text style={styles.Mobileinnertext}>Duration:1 Month</Text>
          <View style={styles.confirm}>
            <Button

              title="View"
              color="#ff5c5c"
              type="clear"
            />
          </View>
        </View>

      </View>
    );

  }
}

const styles = StyleSheet.create({

  rectanglemain: {

    width: 329,
    height: 160,
    borderRadius: 25,
    marginBottom: 20,
    marginLeft: 14,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ececec"
  },
  Mobiletext: {
    fontFamily: "Roboto",
    paddingLeft: 15,
    margin: 4,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    color: "#000000",
    justifyContent: "space-between", textAlign: "justify", fontSize: 17
  },
  Mobileinnertext: {
    paddingLeft: 15,
    margin: 2,
    fontWeight: "100",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    color: "#000000",
    justifyContent: "space-between", textAlign: "justify", fontSize: 14
  },
  confirm: {
    width: 104,
    height: 40,
    paddingTop: 10,
    paddingBottom: 34,
    borderRadius: 25,
    marginLeft: 217,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 24,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#ececec"
  }
})
export default MyBookings;