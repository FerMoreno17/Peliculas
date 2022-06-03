import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Movie } from '../Interfaces/now_playing.interface';
import Poster from './Poster.component';

interface SliderProps {
    data: Movie[];
    title?: string;
}
export default function HorizontalSlider({ data, title = '' }: SliderProps) {
    const styles = StyleSheet.create({
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            color:'#000',
        },
    });
    return (
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList
                data={data}
                renderItem={item =>
                    <Poster
                        movie={data[item.index]}
                        width={140}
                        height={200}
                    />}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
