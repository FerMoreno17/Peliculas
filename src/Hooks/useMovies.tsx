import { useEffect, useState } from 'react';
import { Movie } from '../Interfaces/now_playing.interface';
import { getNowPlaying, getPopular, getTopRated, getUpcoming } from '../ServerRequest/Server';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {
    const [loading, setLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>();


    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {
        const nowPlayingPromise = getNowPlaying();
        const popularPromise = getPopular();
        const topRatedPromise = getTopRated();
        const upcomingPromise = getUpcoming();

        const respuesta =  await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setMoviesState({
            nowPlaying: respuesta[0].data.results,
            popular: respuesta[1].data.results,
            topRated: respuesta[2].data.results,
            upcoming: respuesta[3].data.results,
        });
        setLoading(false);
    }
    return {...moviesState, loading };
};
