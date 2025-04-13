import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
type NonTabScreenNavigationProp = StackNavigationProp<any>;

export default function NonTabScreen({ navigation }: { navigation: NonTabScreenNavigationProp }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Non-Tab Screen!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});