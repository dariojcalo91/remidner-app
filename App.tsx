import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import { Main } from './src/container/Main';

const App: () => React.ReactElement = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
          <Main /> 
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flexDirection: "column",
  },
});

export default App;
