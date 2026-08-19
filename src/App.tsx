//import './App.css';
import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ScrollView, View, Text } from 'react-native';
import SPBHeader from './components/SPBHeader.tsx';
import RPFooter from './components/RPFooter.tsx';
import Time from './screens/Time.tsx';
import BookDate from './screens/Date.tsx';
import People from './screens/People.tsx';
import Form from './screens/Form.tsx';
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';

const App = () => {
  // Initialise state
  const [stage, setStage] = React.useState("date");
  const [lastStage, setLastStage] = React.useState("");
  const [returnVis, setReturnVis] = React.useState(false);
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState<DateType>();

  // Time state handler
  function setTimeState(time:string) {
    setTime(time);
  }

  // Date state handler
  function setDateState(date:DateType) {
    setDate(date);
  }

  function visControl(stage:string) {
    if (stage == "date") {
      setReturnVis(false);
    } 
    else {
      setReturnVis(true);
    }
  }

  return (
    <SafeAreaView tabIndex={0} role='main' style={styles.container}>
      <SPBHeader dest={() => {visControl(lastStage); setStage(lastStage)}} buttonCheck={returnVis} />
      <ScrollView tabIndex={0}>
        {stage == "date" &&
          <BookDate setDateState={setDateState} loadPeople={() => {setStage("people"); setLastStage("date"); setReturnVis(true);}}/>
        }
        {stage == "people" &&
          <People loadTime={() => {setStage("time"); setLastStage("people")}}/>
        }
        {stage == "time" &&
          <Time setTimeState={setTimeState} loadForm={() => setStage("form")}/>
        }
        {stage == "form" &&
          <Form date={date} time={time} loadSuccess={() => setStage("success")}/>
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
