import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button } from 'react-native';
import Example from '../components/Example.tsx';
import Member from '../components/Member.tsx';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import memberData from '../assets/members.json';

type AboutProps = {
  contactPress: () => void;
}

export default function About({contactPress}: AboutProps) {
  return (
        <View tabIndex={0} role='region' style={styles.aboutCont}>
          <View tabIndex={0} style={styles.aboutSection}>
            <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>About us</Text>
            </View>
            <View tabIndex={0} style={styles.detailsSubsection}>
              <View tabIndex={0}> 
                <Text style={styles.sectionHeadText}>What we do</Text>
              </View>
              <View tabIndex={0}>
                <Text style={styles.text}>We are brothers who design and develop web apps to be used with any device. Just say what you want out of your app and it will be done right. With two of us working to produce your app, it will be ready sooner without any extra costs.</Text>
                <Text style={styles.text}>With each task allocated according to our own strengths, you will be guaranteed consistency across the whole app as well as quality.</Text>
                <Text style={styles.text}>Want to make your dream app a reality? Get in touch with us through our "Contact Us" page.</Text>
              </View>
              <View tabIndex={0} style={styles.button}>
                <Button color='#355872' title='Contact us' onPress={contactPress}></Button>
              </View>
            </View>
          </View>
          {/*<View tabIndex={0} role='navigation' style={styles.exampleSection}>
            <View tabIndex={0} style={styles.exampleList}>
              <View tabIndex={0}>
                <Text style={styles.sectionHeadText}>Examples</Text>
              </View>
              <View tabIndex={0}>
                <Example image={'https://upload.wikimedia.org/wikipedia/commons/0/0f/Blank_Square.svg'} name={'Example 1'}></Example>
              </View>
              <View tabIndex={0}>
                <Example image={'https://upload.wikimedia.org/wikipedia/commons/0/0f/Blank_Square.svg'} name={'Example 2'}></Example>
              </View>
              <View tabIndex={0}>
                <Example image={'https://upload.wikimedia.org/wikipedia/commons/0/0f/Blank_Square.svg'} name={'Example 3'}></Example>
              </View>
            </View>
          </View>*/}
          <View tabIndex={0} style={styles.memberSection}>
            <View tabIndex={0} style={styles.subHeading}>
              <Text style={styles.subHeadText}>Members</Text>
            </View>
            <View tabIndex={0} style={styles.memberList}>
              {
                memberData.map((item)=>
                {
                  return(
                    <Member photo={require('../assets/' + item.image)} name={item.name} description={item.description}/>
                )})}
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