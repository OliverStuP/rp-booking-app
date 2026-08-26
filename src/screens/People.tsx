import React, {useEffect} from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button, Pressable } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';

type PeopleProps = {
  setPeopleState: (people:number) => void; 
  handleStage: (stage:string) => void;
  loadTime: () => void;
}

export default function People({setPeopleState, handleStage, loadTime}: PeopleProps) {
  const [count, setCount] = React.useState(1);

  useEffect(() => {
    handleStage("date");
  });

  function minControl(count: number) {
    if (count == 1) {
      setCount(1);
    }
    else {
      setCount(count-1)
    }
  }

  function maxControl(count: number) {
    if (count == 100) {
      setCount(100);
    }
    else {
      setCount(count+1)
    }
  }

  // Store people and load next stage
    function handlePeople(people:number) {
      setPeopleState(people);
      loadTime();
    }

  return (
        <View tabIndex={0} role='region' style={styles.peopleCont}>
          <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>Number of people</Text>
          </View>
          <View tabIndex={0} style={styles.peopleSection}>
            <View tabIndex={0} style={styles.countSubsection}>
              <Pressable style={styles.operator} onPress={() => {minControl(count)}}>-</Pressable>
              <Text style={styles.numberDisplayed}>{count}</Text>
              <Pressable style={styles.operator} onPress={() => {maxControl(count)}}>+</Pressable>
            </View>
            <View tabIndex={0} style={styles.button}>
              <Button color='#355872' title='Continue' onPress={() => {handlePeople(count)}}></Button>
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  peopleCont: {
    flexDirection: 'column',
  },
  peopleSection: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  subHeading: {
    padding: 5,
    alignItems: 'center',
  },
  subHeadText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#355872',
    fontFamily: "Helvetica",
  },
  sectionHeadText: {
    color: '#355872',
    fontWeight: 'bold',
    padding: 10,
    fontFamily: "Helvetica",
    fontSize: 18,
  },
  numberDisplayed: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#355872',
    fontFamily: "Helvetica",
  },
  operator: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "Helvetica",
    marginLeft: 20,
    marginRight: 20,
    width: 25,
  },
  countSubsection: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    width: 100,
    margin: 3,
  },
});