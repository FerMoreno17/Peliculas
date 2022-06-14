import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useFade from '../Hooks/useFade';

interface GradientProps {
    children: JSX.Element | JSX.Element[];
}
export default function Gradient(
    { children }: GradientProps) {
    const { colores, prevColors, setPrevMainColors } = useContext(GradientContext);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    });

    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn(setPrevMainColors(colores));
    }, [colores]);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, '#fff']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.8 }}
            />
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity: opacity,
                }}
            >
                <LinearGradient
                    colors={[colores.primary, colores.secondary, '#fff']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.8 }}
                />

            </Animated.View>
            {children}
        </View>
    );
}
