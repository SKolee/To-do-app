import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Text, TextInput, View, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
//Actions
import {logOut} from '../actions/authActions';
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from '../actions/todoActions';
//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ToDo = () => {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState('');
  const [todoid, setId] = useState();

  const inputRef = useRef();

  const dispatch = useDispatch();
  const list = useSelector(state => state.todoReducer);

  useEffect(() => {
    inputRef.current.focus();
  }, [isEditing]);

  //Logout Button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => dispatch(logOut(), navigation.navigate('Login'))}>
          <MaterialCommunityIcons
            name="logout"
            size={40}
            style={{paddingRight: 12}}
            color={'tomato'}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
    {/* input field */}
      <View style={styles.jsxStyle}>
        {isEditing ? (
          <TextInput
            value={editTask}
            style={styles.inputStyle}
            placeholder="Enter edit items"
            ref={inputRef}
            onChangeText={text => setEditTask(text)}
            autoComplete="off"
          />
        ) : (
          <TextInput
            value={input}
            style={styles.inputStyle}
            placeholder="Enter Add items"
            ref={inputRef}
            onChangeText={text => setInput(text)}
            autoComplete="off"
          />
        )}

        {/* add and save button */}
        <View style={{paddingRight: 20}}>
          {isEditing ? (
            <TouchableOpacity
              onPress={() => {
                setIsEditing(false);
                dispatch(editTodo(todoid, editTask));
              }}>
              <Ionicons name="save" size={47} color={'tomato'} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => dispatch(addTodo(input), setInput(''))}>
              <MaterialIcons name="add-circle" size={55} color={'tomato'} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* To do list renders */}
      <FlatList
        keyExtractor={list => list.id}
        showsVerticalScrollIndicator={false}
        data={list}
        ListFooterComponent={<View style={{height: 20}} />}
        renderItem={({item}) => {
          //{item} direct reference to friend object or else it will give all data related to obj eg: index
          return (
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.push('To-Do Details', {
                    itemData: item.data,
                    itemStatus: item.completed ? 'Completed' : 'Pending',
                  })
                }>
                <View
                  style={[
                    styles.listFrame,
                    {backgroundColor: item.completed ? '#ffeecc' : 'tomato'},
                  ]}
                  key={item.id}>
                  <View style={styles.listStyle}>
                    <Text
                      style={{
                        fontSize: 20,
                        flex: 2,
                        fontFamily: 'RobotoMono-Bold',
                        color: item.completed ? 'tomato' : '#ffeecc',
                      }}>
                      {item.data}
                    </Text>

                    <View style={styles.buttonStyle}>
                      <TouchableOpacity
                        onPress={() => {
                          setIsEditing(true);
                          setEditTask(item.data);
                          setId(item.id);
                        }}>
                        <FontAwesome5
                          name="pen"
                          size={32}
                          style={{padding: 5}}
                          color="orange"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => dispatch(deleteTodo(item.id))}>
                        <MaterialCommunityIcons
                          name="delete"
                          size={42}
                          style={{paddingLeft: 5}}
                          color="red"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.statusStyle}>
                    <TouchableOpacity
                      onPress={() => dispatch(toggleTodo(item.id))}>
                      <FontAwesome5
                        name="check-circle"
                        size={35}
                        style={{color: item.completed ? 'green' : 'grey'}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listFrame: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 2,
    margin: 7,
    borderRadius: 5,
    backgroundColor: '#ffeecc',
  },
  inputStyle: {
    margin: 10,
    fontSize: 20,
    flex: 2,
    fontFamily: 'RobotoMono-Bold',
  },
  listStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 67,
    padding: 10,
  },
  buttonStyle: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 7,
  },
  statusStyle: {
    alignSelf: 'flex-end',
    margin: 14,
  },
  jsxStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    fontFamily: 'RobotoMono-Bold',
  },
});
export default ToDo;
