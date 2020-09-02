import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";

export default class app_react360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>"Chase your vision" </Text>
          <Text style={(styles.greeting, (fontSize = 24))}>
            Lothian, MD - July 2020{" "}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    // backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 40,
    backgroundColor: "#623cea",
    borderColor: "#f3f3f3",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  greeting: {
    fontSize: 80,
  },
});

AppRegistry.registerComponent("app_react360", () => app_react360);
