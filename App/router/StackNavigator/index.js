import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '@app/router/TabNavigator';
import SignInScreen from '@app/screens/SignInScreen';
import Authorization from '@app/screens/Authorization';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginAction } from '@app/redux/actions/loginAction';

const StackNavigator = () => {
  const dispatch = useDispatch();
  const loadStorageData = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch(loginAction(token));
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  const Stack = createNativeStackNavigator();
  const isLogin = useSelector((state) => state?.loginReducer);
  console.log({ isLogin });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin ? (
        <Stack.Screen name="Root" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Authorization" component={Authorization} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
