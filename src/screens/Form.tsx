import {useState} from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import {Picker} from '@react-native-picker/picker';

export default function Form() {
  // Initialise state
  const [selectedTitle, setSelectedTitle] = useState();
  return (
        <View tabIndex={0} role='region' style={styles.aboutCont}>
          <View tabIndex={0} style={styles.headingCont}>
            <Text style={styles.heading}>Details</Text>
          </View>
          <View tabIndex={0} style={styles.aboutSection}>
            <View tabIndex={0}>
              <Picker
                aria-label='Honorific prefix input'
                style={styles.field}
                selectedValue={selectedTitle}
                onValueChange={(itemValue) =>
                  setSelectedTitle(itemValue)
                }>
                <Picker.Item label="Mr" value="mr" />
                <Picker.Item label="Ms" value="ms" />
                <Picker.Item label="Mx" value="mx" />
              </Picker>
            </View>
            <View tabIndex={0} style={styles.detailsSubsection}>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='11:45' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='12:00' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='12:15' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='12:30' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='12:45' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='13:00' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='13:15' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='13:30' onPress={() => {}}></Button>
              </View>
            </View>
          </View>
          <View tabIndex={0} style={styles.aboutSection}>
            <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>Lunch</Text>
            </View>
            <View tabIndex={0} style={styles.detailsSubsection}>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='11:45' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='12:00' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='12:15' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='12:30' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='12:45' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='13:00' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='13:15' onPress={() => {}}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='13:30' onPress={() => {}}></Button>
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
  headingCont: {
    padding: 5,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#355872',
    fontFamily: "Helvetica",
  },
  aboutSection: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  field: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: '1%',
    marginBottom: '1%',
    padding: 5,
    width: 185,
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