import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Input your goals here'></TextInput>
      <Button title='Add Goals'/>
     </View>
     <View style={styles.goalsContainer}>
      <Text>Your Goals!!</Text>
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
 },
 goalsContainer : {
  flex : 4,

 }
});
