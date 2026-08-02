import './App.css';
import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import RPHeader from './components/RPHeader.tsx';
import RPFooter from './components/RPFooter.tsx';
import Landing from './screens/Landing.tsx';
import RPContact from './screens/RPContact.tsx';
import About from './screens/About.tsx';

const App = () => {

  const [stage, setStage] = React.useState("landing");

  return (
    <SafeAreaView tabIndex={0} role='main' style={styles.container}>
      <RPHeader />
      <ScrollView tabIndex={0}>
        {stage == "landing" &&
          <Landing contactPress={() => setStage("contact")} aboutPress={() => setStage("about")} />
        }
        {stage == "about" &&
          <About contactPress={() => setStage("contact")} />
        }
        {stage == "contact" &&
          <RPContact />
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
