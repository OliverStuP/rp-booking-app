//import './App.css';
import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ScrollView, View, Text } from 'react-native';
import SPBHeader from './components/SPBHeader.tsx';
import RPFooter from './components/RPFooter.tsx';
import Time from './screens/Time.tsx';
import Date from './screens/Date.tsx';
import People from './screens/People.tsx';
import Form from './screens/Form.tsx';

const App = () => {

  const [stage, setStage] = React.useState("date");
  const [lastStage, setLastStage] = React.useState("");
  const [returnVis, setReturnVis] = React.useState(false);

  return (
    <SafeAreaView tabIndex={0} role='main' style={styles.container}>
      <SPBHeader dest={() => setStage(lastStage)} buttonCheck={returnVis} />
      <ScrollView tabIndex={0}>
        {stage == "date" &&
          <Date loadPeople={() => {setStage("people"); setLastStage("date"); setReturnVis(false);}}/>
        }
        {stage == "people" &&
          <People />
        }
        {stage == "time" &&
          <Time loadForm={() => setStage("form")}/>
        }
        {stage == "form" &&
          <Form loadSuccess={() => setStage("success")}/>
        }
        {stage == "success" &&
          <View>
            <Text>Your Winner</Text>
          </View>
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
