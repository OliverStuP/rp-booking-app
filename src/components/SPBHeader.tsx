import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button, Pressable } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';

type HeadProps = {
  dest: () => void;
  buttonCheck: boolean;
}

export default function SPBHeader({dest, buttonCheck}: HeadProps) {
    return (
        <View tabIndex={0} role='banner'>
            {buttonCheck && 
                <Pressable style={styles.linkText} onPress={dest}>← Return</Pressable>
            }
            <header style={styles.heading}>
               <Text style={styles.headText}>Salt and Pepper - Reservation Assistant</Text>
            </header>
        </View>
    );
};

const styles = StyleSheet.create({
  heading: {
    padding: 10,
    textAlign: 'center',
    flexDirection: 'row',
  },
  headText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#355872',
    fontFamily: "Helvetica",
  },
  linkText: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    fontFamily: "Helvetica",
  },
});