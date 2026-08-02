import React from 'react';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
export const laptopL = width > 1024;
export const laptop = width > 768;
export const tablet = width > 425;
export const mobileL = width > 375;
export const mobileM = width > 320;