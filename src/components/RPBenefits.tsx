import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';

type BenefitProps = {
  title: string;
  description: string; 
}

export default function RPBenefits({title, description}: BenefitProps) {
    return (
        <View tabIndex={0} style={styles.container}>
            <View tabIndex={0} style={styles.heading}>
                <Text style={styles.headingText}>{title}</Text>     
            </View>
            <View tabIndex={0} style={styles.description}>
                <Text style={styles.text}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    heading: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#355872',
        fontFamily: "Helvetica",
    },
    description: {
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: '#355872',
        width: '75%',
        fontFamily: "Helvetica",
    },
})