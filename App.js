import {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput, FlatList} from 'react-native';
import GoalItem from './components/GoaItem';
import GoalInput from './components/GoalInput';

export default function App() {

 
  const [newGoals,setCourseGoals]= useState([]);
  const [modalVisibility,setVisibility]=useState(false)

  function addModalHandler(){
    setVisibility(true)
  }
 
  function setGoalTextHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,{text: enteredGoalText, id : Math.random().toString()}])

  }
 function deleteItemHandler(id){
  setCourseGoals((currentCourseGoals=>{
    return currentCourseGoals.filter((goal)=>goal.id !==id) // filter will drop the value if it is false
  }))
 }

  return (
    <View style={styles.appContainer}>
      <Button title='Add new Modal' color={'#5e0acc'} onPress={addModalHandler}></Button>
    <GoalInput visible={modalVisibility} addGoalItem={setGoalTextHandler}/>
     <View style={styles.goalsContainer}>
      <FlatList 
      data={newGoals}
      renderItem={(itemData)=>{
       return <GoalItem
       addDeleteGoal={deleteItemHandler}
       id={itemData.item.id}
       text={itemData.item.text}/>}
      }
      keyExtractor={(item,index)=>{
        return item.id
      }}
      />
       
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer :{
  flex : 1,
  padding: 50,
  paddingHorizontal: 16
 },

 goalsContainer : {
  flex : 4,

 },

 
});
