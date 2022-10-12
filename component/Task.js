import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.taskItems}>
      <View style={styles.taskItemsLeft}>
        <View style={styles.taskOpaqueBox}></View>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
      <View style={styles.taskItemsRight}></View>
    </View>
  );
};
export default Task;
const styles = StyleSheet.create({
  taskItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    width: 350,
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#F7F7F7",
    borderStyle: "solid",
    borderRadius: 10,
    marginBottom: 20,
  },
  taskItemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  taskOpaqueBox: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  taskText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#1A1A1A",
    maxWidth: "80%",
  },
  taskItemsRight: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 10,
  },
});
