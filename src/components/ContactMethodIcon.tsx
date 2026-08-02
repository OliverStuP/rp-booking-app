import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';


type MethodProps = {
  name: string;
  icon?: any,
  icon2?: any,
  icon3?: any,
  icon4?: any,
  icon5?: any,
}

export default function ContactMethodIcon({name, icon, icon2, icon3, icon4, icon5}: MethodProps) {
    return (
        <View style={styles.methodSection}>
            <Text style={styles.sectionHeadText}>{name}</Text>
            <View style={styles.linkList}>
                {icon != undefined ?
                        <Image style={styles.iconStyle} source={icon} />
                : null}
                {icon2 != undefined ?
                        <Image style={styles.iconStyle} source={icon2} />
                : null}
                {icon3 != undefined ?
                        <Image style={styles.iconStyle} source={icon3} />
                : null}
                {icon4 != undefined ?
                        <Image style={styles.iconStyle} source={icon4} />
                : null}
                {icon5 != undefined ?
                        <Image style={styles.iconStyle} source={icon5} />
                : null}
            </View>      
        </View>
    ) 
}

const styles = StyleSheet.create({
    methodSection: {
        flex: 1,
        padding: 10,
    },
    sectionHeadText: {
        textAlign: ScreenSizes.tablet ? 'left' : 'center',
        fontSize: 18,
        color: '#355872',
        fontWeight: 'bold',
        fontFamily: "Helvetica",
    },
    iconStyle: {
        width: 50, 
        height: 50,
        margin: '0.8%',
    },
    linkList: {
        flexDirection: 'row',
        paddingTop: '1%',
        alignItems: 'center'
    },
})