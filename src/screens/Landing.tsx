import React from 'react';
import { Text, View, Image, StyleSheet, Button, Dimensions } from 'react-native';
import RPBenefit from '../components/RPBenefits.tsx';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import benefitData from '../assets/benefits.json';

type LandingProps = {
  contactPress: () => void;
  aboutPress: () => void;
}

export default function Landing({contactPress, aboutPress}: LandingProps) {
    return (
        <View tabIndex={0} role='region'>
          <View tabIndex={0} style={styles.imageSection}>
            <Image style={styles.heroImage} source={require("../assets/hero-image.jpg")}/>
          </View>
          <View tabIndex={0} style={styles.uspText}>
            <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>Any App, Any Device</Text>
            </View>
            <View tabIndex={0} style={styles.detailsSubsection}>
              <Text style={styles.text}>
                Just tell us your idea for an app and us here at Right Page will make it happen! Whether it be on a desktop, laptop, tablet or mobile device, your app will be fully functioning and ready for the optimal experience!
              </Text>
            </View>
            <View tabIndex={0} role='navigation' style={styles.buttonPair}>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='Contact us' onPress={contactPress}></Button>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='About us' onPress={aboutPress}></Button>
              </View>
            </View>
          </View>
          <View tabIndex={0} style={styles.landingSection}>
            <View tabIndex={0} style={styles.subHeading}>
                <Text style={styles.subHeadText}>Apps for Anyone on Anything</Text>
            </View>
            <View tabIndex={0} style={styles.benefits}>
				      {
					      benefitData.map((item)=>
					      {
						      return(
								    <RPBenefit title={item.title} description={item.description}/>
					      )})}
            </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  imageSection: {
    alignItems: 'center',
    position: 'relative',
  },
  heroImage: {
    width: Dimensions.get('window').width, 
    height: ScreenSizes.tablet ? 300 : 150,
  },
  uspText: {
    alignItems: 'center',
    flex: 1,
    margin: '2%',
    position: 'relative',
    padding: 10,
  },
  subHeading: {
    padding: 5,
    alignItems: 'center',
  },
  subHeadText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#355872',
    fontFamily: "Helvetica",
  },
  detailsSubsection: {
    padding: 10,
    alignItems: 'center',
    
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#355872',
    width: ScreenSizes.laptop ? '35%' : '70%',
    fontFamily: "Helvetica",
  },
  buttonPair: {
    flexDirection: ScreenSizes.tablet ? 'row' : 'column',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    margin: 10,
  },
  landingSection: {
    padding: 10,
    borderTopColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    margin: 0,
    position: 'relative',
  },
  benefits: {
    flexDirection: ScreenSizes.tablet ? 'row' : 'column',
  },
});