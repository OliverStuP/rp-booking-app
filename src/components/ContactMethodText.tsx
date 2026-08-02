import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';


type MethodProps = {
  name: string;
  description: string; 
}

// TODO: Continue tab index edits
export default function ContactMethodText({name, description}: MethodProps) {
    return (
        <View tabIndex={0} style={styles.methodSection}>
            <Text style={styles.sectionHeadText}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    methodSection: {
        padding: 10,
    },
    sectionHeadText: {
        textAlign: ScreenSizes.tablet ? 'left' : 'center',
        fontSize: 18,
        color: '#355872',
        fontWeight: 'bold',
        fontFamily: "Helvetica",
    },
    text: {
        color: '#355872',
        fontFamily: "Helvetica",
        textAlign: ScreenSizes.tablet ? 'left' : 'center',
    },
})