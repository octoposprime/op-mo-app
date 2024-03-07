import React from 'react';
import {SafeAreaView, StyleSheet, Image, View, Text} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require('./assets/images/octoposprime.png')}
          style={styles.image}
        />
        <Text style={styles.text}>We will be together soon 😉</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 50,
  },
});

export default App;
