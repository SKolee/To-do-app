import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logIn} from '../actions/authActions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authReducer);
  const [uname, setName] = useState('');
  const [upass, setUpass] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={styles.mainPage}>
      <View style={{margin: 10}}>
        <Text style={styles.heading}>SIGN IN</Text>
        <TextInput
          style={styles.input}
          value={uname}
          placeholder="Enter your name"
          onChangeText={text => setName(text)}
          autoComplete='off'
          />
        <TextInput
          style={styles.input}
          value={upass}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={text => setUpass(text)}
          autoComplete='off'
        />
        {error ? <Text style={{color: 'red', margin: 15,fontFamily: 'RobotoMono-Bold'}}>{error}</Text> : null}

        <View style={{marginTop: 5}}>
          <Pressable
            style={styles.button}
            onPress={() => {
              if (uname === 'Sumedh' && upass === '123') {
                dispatch(logIn(uname));
                navigation.replace('To-Do_Screen');
              } else {
                setError('Wrong Credentials !');
              }
            }}>
            <Text
              style={{
                fontFamily: 'RobotoMono-Bold',
                fontSize: 20,
                color: '#ffeecc',
              }}>
              LOGIN
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainPage: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    marginTop: 15,
    padding: 5,
    margin: 5,
    fontFamily: 'RobotoMono-Bold',
  },
  heading: {
    fontSize: 50,
    fontFamily: 'RobotoMono-Bold',
    alignSelf: 'center',
    color: 'tomato',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'tomato',
  },
});
export default LoginScreen;
