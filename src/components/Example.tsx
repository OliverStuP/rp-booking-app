import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export interface ExampleProps {
  image: any;
  name: string;
}

export default function Example({image, name}: ExampleProps) {
    return (
        <View style={styles.exampleContainer}>
            <Image style={styles.exampleImage} source={image} />
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  exampleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    exampleImage: {
    resizeMode: 'cover', 
    width: 50, 
    height: 50,
  },
  text: {
    color: '#355872',
    alignSelf: 'center',
    fontWeight: 'bold',
    padding: 20,
    fontFamily: "Helvetica",
  },
});