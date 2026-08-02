import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ContactMethodText from '../components/ContactMethodText.tsx';
import ContactMethodIcon from '../components/ContactMethodIcon.tsx';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
// import EmailForm from '../components/EmailForm.tsx';
import methodTextData from '../assets/contact_methods_text.json';
import methodIconData from '../assets/contact_methods_icon.json';

export default function RPContact() {
    return (
            <View tabIndex={0} role='region'>
              <View tabIndex={0} style={styles.introduction}>
                <View tabIndex={0} style={styles.subHeading}>
                      <Text style={styles.subHeadText}>Contact us</Text>
                </View>
                <View tabIndex={0}>
                  <Text style={styles.introText}>If you have questions about our services or wish to hire us, do not hesitate to contact us.</Text>
                  <Text style={styles.introText}>We are available via telephone, social media, and email.</Text>
                </View>
              </View>
              <View tabIndex={0} style={styles.contactSection}>
                  <View tabIndex={0} style={styles.contactDetails}>
                    <View tabIndex={0} style={styles.detailsSubsection}>
                      {
                        methodTextData.map((item)=>
                        {
                          return(
                            <ContactMethodText name={item.name} description={item.description} ></ContactMethodText>
                          )
                        })
                      }
                      {
                        methodIconData.map((item)=>
                        {
                          return(
                            <ContactMethodIcon name={item.name} icon={require('../assets/' + item.icons.icon1)} icon2={require('../assets/' + item.icons.icon2)} 
                              icon3={require('../assets/' + item.icons.icon3)} icon4={require('../assets/' + item.icons.icon4)} 
                              icon5={require('../assets/' + item.icons.icon5)} >
                            </ContactMethodIcon>
                          )
                      })}
                    </View>
                  </View>
                  {/* <View tabIndex={0} style={styles.contactForm}>
                    <EmailForm />
                  </View> */}
              </View>
            </View>
            
    );
};

const styles = StyleSheet.create({
  introduction: {
    padding: 10,
    alignItems: 'center',
  }, 
  introText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#355872',
    width: ScreenSizes.mobileM ? '75%' : '100%',
    fontFamily: "Helvetica",
    marginTop: 5,
  },
  contactSection: {
    flexDirection: ScreenSizes.tablet ? 'row': 'column',
    alignItems: 'center',
    padding: 10,
    marginTop: ScreenSizes.tablet ? '2.5%' : "auto",
    marginBottom: ScreenSizes.tablet ? '2.5%' : "auto"
  },
  contactDetails: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    //marginLeft: ScreenSizes.laptop ? '20%' : (ScreenSizes.tablet ? '10%' : '0%'),
    marginBottom: ScreenSizes.laptop ? '5%' : (ScreenSizes.tablet ? '20%' : '0%'),
  },
  subHeading: {
    padding: 10,
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
    padding: 20,
  },
  sectionHeadText: {
    color: '#355872',
    fontWeight: 'bold',
    fontFamily: "Helvetica",
  },
  contactForm: {
    flex: 1,
    alignItems: 'center',
    marginRight: ScreenSizes.laptop ? '20%' : '0%',
    marginBottom: ScreenSizes.tablet ? '0%' : "30%",
  },
});