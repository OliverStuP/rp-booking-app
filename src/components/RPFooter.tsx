import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';

type FooterProps = {
  homePress: () => void;
  contactPress: () => void;
  aboutPress: () => void;
}

export default function RPFooter({homePress, contactPress, aboutPress}: FooterProps) {
    return (
        <View tabIndex={0} role='contentinfo' style={styles.footer}>
          <View tabIndex={0} style={styles.homeLink}>
            <Text style={styles.linkText} onPress={homePress}>Right Page </Text>
          </View>
          <View tabIndex={0} style={styles.contactLink}>
            <Text style={styles.linkText} onPress={contactPress}>Contact us </Text>
          </View>
          <View tabIndex={0} style={styles.aboutLink}>
            <Text style={styles.linkText} onPress={aboutPress}>About us </Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    padding: 10,
  },
  homeLink: {
    flex: 1,
  },
  linkText: {
    color: '#355872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: "Helvetica",
  },
  contactLink: {
    flex: 1,
  },
  aboutLink: {
    flex: 1,
  },
});