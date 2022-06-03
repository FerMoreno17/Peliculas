import React from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { useMovies } from '../Hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Poster from '../Commons/Poster.component';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../Commons/HorizontalSlider.component';

export default function HomeScreen() {
  const { nowPlaying, popular, topRated, upcoming, loading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width } = Dimensions.get('screen');

  const styles = StyleSheet.create({
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      marginTop: top + 10,
    },
    altoCarousell: {
      height: 430,
    },
    altoSlider: {
      height: 260,
    },
    background:{
      backgroundColor:'white',
    },
  });

  if (loading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color={'light-blue'} size={50} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.altoCarousell}>
          <Carousel
            data={nowPlaying!}
            renderItem={item =>
              <Poster
                movie={nowPlaying![item.index]}
              />
            }
            sliderWidth={width}
            itemWidth={300}
          />
        </View>
        <View style={styles.altoSlider}>
          <HorizontalSlider data={popular!} title={'Populares'} key={1} />
        </View>
        <View style={styles.altoSlider}>
          <HorizontalSlider data={topRated!} title={'Mejor Ranking'} key={2} />
        </View>
        <View style={styles.altoSlider}>
          <HorizontalSlider data={upcoming!} title={'Lo que viene'} key={3} />
        </View>
      </View>
    </ScrollView>
  );
}
