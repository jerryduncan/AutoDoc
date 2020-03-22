import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, Button } from 'react-native';


export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [clicked, setClicked] = useState(false);



  const InputHandler = (e) => {
    setEnteredGoal(e);
  }

  const addGoal = () => {
    setGoals(currentGoals => [...goals, enteredGoal]);
    setClicked(true)
  }

  return (
    // Forms
      <View style={styles.screen}>
        <View style={styles.inputCont}>
          <TextInput
            placeholder="Course Goal"
            style={styles.TextInput}
            onChangeText={InputHandler}
            value={enteredGoal}
            />
          <Button title="ADD" onPress={addGoal } />

        </View>
        <ScrollView>
          <View>
            {
              goals.map(goal => ( 
                <View key={goal} style={styles.items}><Text >{goal}</Text></View>
              ))
            }
          </View>
        </ScrollView>
      </View>



    //Flex


    // <View style={{ padding: 50,
    //   flexDirection: 'row', 
    //   width: '80%', 
    //   height: 300, 
    //   justifyContent: 'space-between', 
    //   alignItems: 'stretch' 
    // }}>
    //   <View
    //     style={{
    //       backgroundColor: 'red',
    //       flex: 1,
    //       // width: 100,
    //       // height: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <Text>1</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'blue',
    //       flex: 3,
    //       // width: 100,
    //       // height: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <Text>2</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'green',
    //       flex: 1,
    //       // width: 100,
    //       // height: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <Text>3</Text>
    //   </View>
    // </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  TextInput: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 5
  },
  items: {
    padding: 10,
    marginVertical: 5, 
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});

