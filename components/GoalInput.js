import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
=======
import { StyleSheet,View,TextInput ,Button, Modal} from "react-native"
import { useState } from "react";
function GoalInput (props){
    const [enteredGoalText,setGoalText]= useState('');
    function inputGoalHandler(enteredGoal){
        setGoalText(enteredGoal)
      
    }
  function addGoalHandler (){
    props.addGoalItem(enteredGoalText)
  
    setGoalText('')
  }
    return <Modal visible={props.visible} animationType="slide">
     <View style={styles.inputContainer}>
    <TextInput style={styles.textInput} placeholder='Input your goals here' onChangeText={inputGoalHandler}
    value = {enteredGoalText}
    ></TextInput>
    <Button title='Add Goals' onPress={addGoalHandler}/>
   </View>
   </Modal>
}

export default GoalInput
const styles = StyleSheet.create({ 
    inputContainer : {
    flex: 1,
   flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom : 24,
    borderBottomWidth : 1,
    borderBottomColor : 'gray'
   },
   textInput : {
    borderWidth : 1,
  width: '70%',
  marginRight : 8,
  padding : 8,
  borderColor: 'gray'
   },})
>>>>>>> abf04bdf28d1eb1171de52e5146f89505a6e59a7
