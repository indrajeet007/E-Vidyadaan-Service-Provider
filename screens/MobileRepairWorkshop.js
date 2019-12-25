import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import { render } from "react-dom";



export class MobileRepairWorkshop extends Component {


  constructor(props) {
    super(props);
    this.state = {}

  }


  render() {
    return (
      <View>
        <Card containerStyle={{ backgroundColor: '#6495ED', paddingBottom: 10 }}>

          <Text style={{ textAlign: "left", fontSize: 18, paddingBottom: 20, fontFamily: 'normal' }}>Name: Mobile Repair workshop</Text>


          <Text style={styles.Mobileinnertext}>Requested By: Name</Text>
          <Text style={styles.Mobileinnertext}>Duration:1 Month</Text>
        </Card>
        <View style={styles.rectangle}>

          <Button
            title="Setup Meet"
            color="black"

            type="clear"
          />
        </View>
        <View style={styles.rectangle}>

          <Button
            title="Upload video"
            onPress={() => this.props.navigation.navigate("UploadVideoscreen")}

            color="black"
            type="clear"
          />
        </View>
        <View style={styles.rectangle}>

          <Button
            title="Video Conferencing"
            color="black"
            type="clear"
          />
        </View>
      </View>
    )

  }
}
const styles = StyleSheet.create({

  Mobileinnertext: {
    paddingLeft: 15,
    marginLeft: 2,
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
  },

  rectangle: {

    width: 329,
    height: 50,

    borderRadius: 25,
    marginTop: 30,
    marginLeft: 28,
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
  }
})
export default MobileRepairWorkshop;