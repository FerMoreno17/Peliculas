import { View, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Movie } from '../Interfaces/now_playing.interface';
import { useNavigation } from '@react-navigation/native';

interface PosterProps {
    movie: Movie;
    width?: number;
    height?: number;
}

export default function Poster({ movie, width = 300, height = 420 }: PosterProps) {
    const navigation = useNavigation();
    const url_image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const styles = StyleSheet.create({
        container: {
            width: width,
            height: height,
            marginHorizontal:5,
        },
        shadow: {
            flex: 1,
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 7,
            elevation: 10,
        },
        image: {
            flex: 1,
            borderRadius: 30,
        },
    });


    function handlerNavigateDetalle(){
        navigation.navigate('Detalle', movie);
    }

    return (
        <Pressable
        style={styles.container}
        onPress={handlerNavigateDetalle}
        >
            <View style={styles.shadow}>
                <Image source={{ uri: url_image }} style={styles.image} />
            </View>
        </Pressable>
    );
}
