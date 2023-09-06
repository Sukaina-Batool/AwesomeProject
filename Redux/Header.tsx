
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30,textAlign:'right',padding:40,backgroundColor:'orange' }} >Header</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}
)
export default Header;