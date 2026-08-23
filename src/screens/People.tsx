import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button, Pressable } from 'react-native';
import Example from '../components/Example.tsx';
import Member from '../components/Member.tsx';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import memberData from '../assets/members.json';

type PeopleProps = {
  setPeopleState: (people:number) => void; 
  loadTime: () => void;
}

export default function People({setPeopleState, loadTime}: PeopleProps) {
  const [count, setCount] = React.useState(1);

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
        <View tabIndex={0} role='region' style={styles.aboutCont}>
          <View tabIndex={0} style={styles.aboutSection}>
            <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>Number of people</Text>
            </View>
            <View tabIndex={0} style={styles.detailsSubsection}>
              <Pressable onPress={() => {minControl(count)}}>-</Pressable>
              <Text style={styles.subHeadText}>{count}</Text>
              <Pressable onPress={() => {maxControl(count)}}>+</Pressable>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='Continue' onPress={() => {handlePeople(count)}}></Button>
              </View>
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  aboutCont: {
    flexDirection: 'column',
  },
  aboutSection: {
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
  text: {
    color: '#355872',
    width: ScreenSizes.laptop ? '30%' : (ScreenSizes.tablet ? "50%": (ScreenSizes.mobileM ? "75%" : "100%")),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: "Helvetica",
    marginTop: 5,
  },
  detailsSubsection: {
    padding: 10,
    alignItems: 'center',
  },
  button: {
    width: 100,
    margin: 10,
  },
  exampleSection: {
    flexDirection: 'column',
    marginBottom: '2%',
  },
  exampleList: {
    alignItems: 'center',
    flex: 1,
  },
  memberSection: {
    padding: 10,
    borderBottomColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    margin: 0,
    position: 'relative',
  },
  memberList: {
    flexDirection: 'column',
  }
});