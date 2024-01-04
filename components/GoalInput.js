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