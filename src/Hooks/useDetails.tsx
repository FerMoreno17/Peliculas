import { useEffect, useState } from 'react';
import { Cast } from '../Interfaces/credits.interface';
import { FullMovie } from '../Interfaces/fullMovie.interface';
import { getCredits, getMovieDetail } from '../ServerRequest/Server';

interface MovieDetails {
    isLoading: boolean;
    cast: Cast[];
    fullMovie?: FullMovie;
}

export function useDetails(movieId: number) {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        fullMovie: undefined,
        cast: [],
    });

    useEffect(() => {
        getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getDetails() {
        const details = getMovieDetail(movieId);
        const credits = getCredits(movieId);

        const respuesta = await Promise.all([
            details,
            credits,
        ]);

        setState({
            isLoading: false,
            fullMovie: respuesta[0].data,
            cast: respuesta[1].data.cast,
        });
    }

    return {
        ...state,
    };
}
