import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from '@app/redux/actions/authenticationActions';

function HomeScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles?.home}>
      <Text>Home</Text>
      <Button
        onPress={() => {
          dispatch(logOut());
        }}
        title="logout"
      />
    </View>
  );
}
HomeScreen.propTypes = {
  navigation: propTypes.object,
};
export default HomeScreen;

const styles = StyleSheet.create({
  home: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
