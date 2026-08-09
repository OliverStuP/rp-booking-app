import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import lunchDate from "../../src/lunch.json"
import dinnerDate from "../../src/dinner.json"

type TimeProps = {
  loadForm: () => void;
}

export default function Time({loadForm}: TimeProps) {
  return (
        <View tabIndex={0} role='region' style={styles.aboutCont}>
          <Text>Time slot</Text>
          <View tabIndex={0} style={styles.aboutSection}>
            <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>Lunch</Text>
            </View>
            <View tabIndex={0} style={styles.detailsSubsection}>
              {
                lunchDate.map((slot) => {
                  return(
                    <View tabIndex={0} style={styles.button}>
                      <Button color='#355872' title={slot.time} onPress={loadForm}/>
                    </View>
                  )
                })
              }
            </View>
          </View>
          <View tabIndex={0} style={styles.aboutSection}>
            <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>Dinner</Text>
            </View>
            <View tabIndex={0} style={styles.detailsSubsection}>
              {
                dinnerDate.map((slot) => {
                  return(
                    <View tabIndex={0} style={styles.button}>
                      <Button color='#355872' title={slot.time} onPress={loadForm}/>
                    </View>
                  )
                })
              }
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