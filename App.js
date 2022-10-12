import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Task from "./component/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleTextChange = (text) => {
    setTask(text);
  };

  const addTaskItem = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const deleteTaskItem = (index) => {
    let taskItemCopy = [...taskItem];
    taskItemCopy.splice(index, 1);
    setTaskItem(taskItemCopy);
  };

  return (
    <View style={styles.container}>
      {/* section for task */}
      <View style={styles.containerWrapper}>
        <Text style={styles.containerText}>Task List</Text>

        {/* section for task list */}
        <View style={styles.taskContainerList}>
          {taskItem.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => deleteTaskItem(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addItemBox}
      >
        <TextInput
          placeholder="add items"
          style={styles.addInput}
          value={task}
          onChangeText={handleTextChange}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText} onPress={addTaskItem}>
            +
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  containerWrapper: {
    marginTop: 80,
    paddingHorizontal: 20,
  },
  containerText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
    color: "#efefef",
    borderRadius: 10,
    backgroundColor: "#2C2C2C",
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  taskContainerList: {
    marginTop: 30,
  },
  addItemBox: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  addInput: {
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 60,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addButtonText: {
    color: "#C0C0C0",
    fontSize: 24,
    fontWeight: "400",
  },
});
