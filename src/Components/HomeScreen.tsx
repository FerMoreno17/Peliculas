import React, { useContext } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { useMovies } from '../Hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Poster from '../Commons/Poster.component';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../Commons/HorizontalSlider.component';
import Gradient from '../Commons/Gradient.component';
import getImageColors from '../Helpers/getImageColors.helper';
import { GradientContext } from '../context/GradientContext';

export default function HomeScreen() {
  const { nowPlaying, popular, topRated, upcoming, loading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width } = Dimensions.get('screen');
  const { setMainColors } = useContext(GradientContext);

  const styles = StyleSheet.create({
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      marginTop: top + 10,
      paddingHorizontal: 10,
    },
    altoCarousell: {
      height: 430,
    },
    altoSlider: {
      height: 260,
    },
  });

  if (loading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color={'light-blue'} size={50} />
      </View>
    );
  }

  async function getPosterColors(index: number) {
    if (nowPlaying) {
      const path_temp = nowPlaying[index].poster_path;
      const url_image = `https://image.tmdb.org/t/p/w500${path_temp}`;
      const [primary = 'green', secondary = 'orange'] = await getImageColors(url_image);
      setMainColors({ primary: primary, secondary: secondary });
    }
  }


  return (
    <Gradient>
      <ScrollView>
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
              inactiveSlideOpacity={0.9}
              onSnapToItem={(index) => getPosterColors(index)}
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
    </Gradient>
  );
}
