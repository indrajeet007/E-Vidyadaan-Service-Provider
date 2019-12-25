import React, { Component } from "react";
import { View, StyleSheet, CheckBox } from "react-native";
import { Text, Card, Button, Header, Avatar, ListItem, TouchableScale } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export class UploadVideoscreen extends Component {


  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <View>
        <Header style={{ height: 20, width: 200 }}
          placement="left"
          centerComponent={{ text: 'Mobile Repair Workshop', style: { fontSize: 20, color: '#fff' } }}

        />
        <View style={styles.rectangle}>
          <Button

            title="upload video"
            color="#ff5c5c"
            type="clear"
          />
        </View>
        <View style={{ marginLeft: 35, marginTop: 25 }}>
          <Text style={{ fontSize: 20 }}>Video List</Text>
        </View>
        {/* <View>
            <Avatar
  size="xlarge"
  rectangle
  title=""
  overlayContainerStyle={{backgroundColor: '#4169E1'}}
  onPress={() => console.log("Works!")}
  containerStyle={{ marginTop: 90,marginLeft:20}}
  activeOpacity={0.7}
  
/>
<Text></Text>
            </View> */}


        <View style={{ paddingTop: 10, margin: 25 }}>
          <ScrollView>
            {
              list.map((item, i) => (
                <ListItem

                  key={i}
                  title={item.title}
                  subtitle={item.subtitle}
                  leftAvatar={{ source: { uri: item.avatar_url } }}
                  bottomDivider
                  chevron
                />
              ))
            }
          </ScrollView>
        </View>

      </View>
    )
  }
}
const list = [
  {
    title: 'name',
    subtitle: 'date',
    avatar_url: 'https://eurocold.co.uk/wp-content/uploads/2015/08/light-blue-box.png'
  },
  {
    title: 'name',
    subtitle: 'date',
    avatar_url: 'https://eurocold.co.uk/wp-content/uploads/2015/08/light-blue-box.png'
  }
]

const styles = StyleSheet.create({
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
export default UploadVideoscreen;