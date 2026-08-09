import './App.css';
import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import RPHeader from './components/SPBHeader.tsx';
import RPFooter from './components/RPFooter.tsx';
import Time from './screens/Time.tsx';

const App = () => {

  const [stage, setStage] = React.useState("time");

  return (
    <SafeAreaView tabIndex={0} role='main' style={styles.container}>
      <RPHeader />
      <ScrollView tabIndex={0}>
        {stage == "time" &&
          <Time />
        }
      </ScrollView>
      <RPFooter homePress={() => setStage("landing")} contactPress={() => setStage("contact")} aboutPress={() => setStage("about")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Add styling for the primary window
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#F7F8F0',
  },
});

export default App;
