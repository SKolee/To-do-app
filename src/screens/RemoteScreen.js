import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const RemoteScreen = ({ navigation }) => {

  useEffect(() => {
    getRemoteTodo()
  }, [])

  const [todo, setTodo] = useState('');

  const getRemoteTodo = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/todos`
      const response = await axios.get(url);
      //console.log(response);
      setTodo(response);
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <FlatList
        data={todo.data}
        keyExtractor={(todo) => todo.id}

        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.push('Remote_Detail', { itemData: item.title, itemStatus: item.completed ? 'Completed' : 'Pending' })}>
            <View style={[styles.listFrame, { backgroundColor: item.completed ? '#ffeecc' : 'tomato' }]}>
              <View style={styles.listStyle} >
                <Text style={{ fontSize: 20,fontFamily:'RobotoMono-Bold' }}>{item.title}</Text>
              </View>
              <View style={styles.buttonStyle} >
                <Text style={{ fontSize: 20,fontFamily:'RobotoMono-Bold'}}>{item.completed ? 'Completed' : 'Pending'}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }} />
    </>
  )
}

const styles = StyleSheet.create({
  listFrame: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 2,
    margin: 5,
    borderRadius: 5,
  },
  listStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 80,
    padding: 10,
    
  },
  buttonStyle: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
})

export default RemoteScreen
