// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <Text style={styles.text}>This is the Profile Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default ProfileScreen;
