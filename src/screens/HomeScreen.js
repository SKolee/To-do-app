import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import ToDo from '../components/ToDo';

const HomeScreen = () => {
    const auth = useSelector(state => state.authReducer);
    return <View>{auth.isLoggedIn ? <ToDo /> : null}</View>;
};


export default HomeScreen;
