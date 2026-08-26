import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import { DateType } from 'react-native-ui-datepicker';

type SuccessProps = {
  loadDate: () => void;
  date: DateType;
  people: number;
  time: string;
  name: string;
  email: string;
  phone: string;
}

export default function Success({loadDate, date, people, time, name, email, phone}: SuccessProps) { 
  return (
        <View tabIndex={0} role='region' style={styles.aboutCont}>
          <Text style={styles.subHeadText}>Your reservation has been completed.</Text>
          <View style={styles.aboutSection}>
            <View style={styles.detailsSubsection}>
              <Text style={styles.text}>Date: {date?.toString().substring(0, 15)}</Text>
              <Text style={styles.text}>Number of People: {people}</Text>
              <Text style={styles.text}>Time: {time}</Text>
              <Text style={styles.text}>Full Name: {name}</Text>
              <Text style={styles.text}>Email: {email}</Text>
              <Text style={styles.text}>Phone: {phone}</Text>
            </View>
            <View style={styles.button}>
              <Button color='#355872' title={"Make another reservation"} onPress={loadDate}/>
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
    alignSelf: 'center',
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
    fontFamily: "Helvetica",
    marginTop: 5,
    marginBottom: 5,
  },
  detailsSubsection: {
    padding: 10,
    alignSelf: 'center',
  },
  button: {
    width: 250,
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