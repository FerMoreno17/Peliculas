import { useRef } from 'react';
import { Animated } from 'react-native';

export default function useFade(callback?: Function) {
    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start(() => callback ? callback() : null);
    };

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start(() => callback ? callback() : null);
    };

    return { fadeIn, fadeOut, opacity };
}
