/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import useFade from '../Hooks/useFade';

export default function FadeScreen() {
    const { fadeIn, fadeOut, opacity } = useFade();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return (
        <View style={styles.container}>
            <Animated.View style={{
                backgroundColor: '#084f6a',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacity,
            }} />
        </View>
    );
}
