import axios from 'axios';
import { Credits } from '../Interfaces/credits.interface';
import { FullMovie } from '../Interfaces/fullMovie.interface';
import { MoviesResponse } from '../Interfaces/now_playing.interface';

const serverRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '488ad4fe06c16f0aa5082b7f9ecbf08f',
        language: 'es-ES',
    },
});

export function getNowPlaying() {
    const respuesta = serverRequest.get<MoviesResponse>('/now_playing');
    return respuesta;
}

export function getPopular() {
    const respuesta = serverRequest.get<MoviesResponse>('/popular');
    return respuesta;
}

export function getTopRated() {
    const respuesta = serverRequest.get<MoviesResponse>('/top_rated');
    return respuesta;
}

export function getUpcoming() {
    const respuesta = serverRequest.get<MoviesResponse>('/upcoming');
    return respuesta;
}

export function getMovieDetail(movieId:number) {
    const respuesta = serverRequest.get<FullMovie>(`/${movieId}`);
    return respuesta;
}

export function getCredits(movieId:number) {
    const respuesta = serverRequest.get<Credits>(`/${movieId}/credits`);
    return respuesta;
}
