import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { FullMovie } from '../Interfaces/fullMovie.interface';
import { Cast } from '../Interfaces/credits.interface';
import Icon from 'react-native-vector-icons/FontAwesome';
import CastItem from './CastItem.component';

interface MovieDetailProps {
    fullMovie: FullMovie;
    cast: Cast[];
}

export default function MovieDetail({ cast, fullMovie }: MovieDetailProps) {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 10,
        },
        row: {
            flexDirection: 'row',
        },
        average: {
            marginLeft: 10,
            color: 'black',
        },
        gender: {
            color: 'black',
        },
        subtitle: {
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
        },
        paragraph: {
            fontSize: 16,
            color: 'black',
        },
    });


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Icon name={'star'} size={20} color={'grey'} />
                <Text style={styles.average}>
                    {fullMovie.vote_average}
                </Text>
                <Text style={styles.gender}>
                    - {fullMovie.genres.map(genero => genero.name).join(', ')}
                </Text>
            </View>
            <Text style={styles.subtitle}>
                Historia
            </Text>
            <Text style={styles.paragraph}>
                {fullMovie.overview}
            </Text>
            <Text style={styles.subtitle}>
                Presupuesto
            </Text>
            <Text style={styles.paragraph}>
                U$D {fullMovie.budget}
            </Text>
            <Text style={styles.subtitle}>
                Actores
            </Text>
            <FlatList
                data={cast}
                renderItem={
                    item => <CastItem actor={item.item} />
                }
                keyExtractor={(item)=> item.id.toString()}
                horizontal
            />
        </View>
    );
}
