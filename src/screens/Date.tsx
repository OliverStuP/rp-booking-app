import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button } from 'react-native';
import Example from '../components/Example.tsx';
import Member from '../components/Member.tsx';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import memberData from '../assets/members.json';
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';

type DateProps = {
  loadPeople: () => void;
}

export default function BookDate({loadPeople}: DateProps) { 
  let today = new Date();

  const defaultStyles = useDefaultStyles();
  const [selected, setSelected] = useState<DateType>();

  return (
        <View tabIndex={0} role='region' style={styles.aboutCont}>
          <View tabIndex={0} style={styles.aboutSection}>
            <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>Choose a day</Text>
            </View>
            <DateTimePicker
              mode="single"
              date={selected}
              onChange={({ date }) =>  {setSelected(date); loadPeople();}}
              minDate={today}
              styles={{
                today: { borderColor: 'blue', borderWidth: 1 },
                selected: { backgroundColor: 'blue' },
                selected_label: { color: 'white' },
                disabled: {opacity: 0.5},
              }}
            />
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