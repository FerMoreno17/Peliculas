import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text, ActivityIndicator } from 'react-native';
import { Movie } from '../Interfaces/now_playing.interface';
import { useDetails } from '../Hooks/useDetails';
import MovieDetail from '../Commons/MovieDetail.component';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetalleScreen({ route }: any) {
  const movie = route.params as Movie;
  const url_image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const { width, height } = Dimensions.get('screen');

  const { cast, isLoading, fullMovie } = useDetails(movie.id);

  const styles = StyleSheet.create({
    container: {
      width: width,
      overflow: 'hidden',
      height: height * 0.8,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
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
    },
    margin: {
      marginVertical: 10,
      marginHorizontal: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
    },
    subtitle: {
      fontSize: 18,
      opacity: 0.8,
    },
    background: {
      marginBottom: 30,
    },
    arrow:{
      position:'absolute',
    }
  });


  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: url_image }}
        />
      </View>
      <View style={styles.margin}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading
        ? <ActivityIndicator color={'light-blue'} size={30} />
        : <MovieDetail cast={cast} fullMovie={fullMovie!} />
      }
      <Icon
        name={'angle-left'}
        size={30}
        color={'white'}
        style={styles.arrow}
      />
    </ScrollView>
  );
}
