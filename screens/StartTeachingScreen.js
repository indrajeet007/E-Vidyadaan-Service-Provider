import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Card, ListItem, Input } from 'react-native-elements'


export class StartTeachingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}



  }
  render() {
    return (
      <View>
        <Card containerStyle={{
          height: 350, width: 350, margin: 24, borderRadius: 25,
          shadowOffset: {
            width: 0,
            height: 2
          }
        }}

        >
          <Text >
            Title
            </Text>
          <Input
            placeholder='Title'
          />
          <View style={{ marginTop: 5 }}>
          </View>

          <Text>Description</Text>
          <Input
            placeholder='Description'
          />
          <View style={{ marginTop: 5 }}>
          </View>

          <Text>Category</Text>
          <Input
            placeholder='Category'
          />
          <View style={{ marginTop: 5 }}>
          </View>

          <Text >Duration</Text>
          <Input
            placeholder='Duration'
          />
          <View style={styles.confirm}>
            <Button
              title="Save"
              type="solid"
            />
          </View>
        </Card>

      </View>

    );


  }
}
const styles = StyleSheet.create({
  confirm: {
    width: 107,
    height: 20,
    borderRadius: 25,
    marginLeft: 210,
    marginTop: 24,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ececec"
  }
})
export default StartTeachingScreen;