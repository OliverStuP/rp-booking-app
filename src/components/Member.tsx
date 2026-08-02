import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';

export interface MemberProps {
  photo: any;
  name: string;
  description: string;
}

const Member: React.FC<MemberProps> = ({photo, name, description}: MemberProps) => {
    return (
        <View tabIndex={0} style={styles.exampleContainer}>
            <View tabIndex={0}>
                <Image style={styles.exampleImage} source={photo} />
            </View>
            <View tabIndex={0} style={styles.bioContainer}>
                <View tabIndex={0} style={styles.heading}>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View tabIndex={0}>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    );
}
export default Member;

const styles = StyleSheet.create({
    exampleContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    exampleImage: {
        resizeMode: 'cover', 
        width: 100, 
        height: 100,
        margin: 10,
    },
    bioContainer: {
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20,
        flex: 1,
    },
    name: {
        color: '#355872',
        fontWeight: 'bold',
        flex: 1,
        fontFamily: "Helvetica",
        fontSize: 18,
        marginBottom: 3,
    },
    description: {
        color: '#355872',
        flex: 1,
        fontStyle: 'italic',
        fontFamily: "Helvetica",
    },
    heading: {
        padding: 3,
    },
});