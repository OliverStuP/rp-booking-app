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
            <header style={styles.heading}>
               <Text style={styles.headText}>Salt and Pepper - Reservation Assistant</Text>
               {buttonCheck && 
                <Pressable onPress={dest}>← Return</Pressable>
               }
            </header>
        </View>
    );
};

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  headText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#355872',
    fontFamily: "Helvetica",
  },
});