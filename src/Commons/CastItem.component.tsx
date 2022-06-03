import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Cast } from '../Interfaces/credits.interface';

interface CastProps {
    actor: Cast;
}

export default function CastItem({ actor }: CastProps) {
    const uri_image = `http://image.tmdb.org/t/p/w500${actor.profile_path}`;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            marginRight:10,
            paddingRight:10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,

            elevation: 9,
        },
        name: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
        },
        character: {
            fontSize: 16,
            opacity: 0.7,
            color: 'black',
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: 5,
            marginRight: 10,
        }
    });

    return (
        <View style={styles.container}>
            {
                actor.profile_path
                && <Image source={{ uri: uri_image }} style={styles.image} />
            }
            <View>
                <Text style={styles.name}>
                    {actor.name}
                </Text>
                <Text style={styles.character}>
                    {actor.character}
                </Text>
            </View>
        </View>
    );
}
