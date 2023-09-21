import { API_KEY } from "./Constants";

export const popular_series = `/tv/popular?api_key=${API_KEY}`;
export const popular_movies = `movie/popular?api_key=${API_KEY}`;

export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action_movies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genre=28`;
export const fantasy_movies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genre=14`;
export const upcoming_movies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const series_arriving_today = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;
export const top_rated_series = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const movie_trailer = `https://api.themoviedb.org/3/movie/{movie_id}/videos`;

