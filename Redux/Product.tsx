
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const Product = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }} >UI for add to cart with Redux</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}
)
export default Product;