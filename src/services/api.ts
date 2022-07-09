import axios from "axios";
import genres from "../utils/genres";
import {MovieOrTvData} from "../interfaces/MovieOrTvData";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"


export default class Api {

    private static getGenre(id: number): string {
        const genre = genres.find(g => g.id === id);
        return genre ? genre.name : "";
    }

    private static getReleaseYear(releaseDate: string): string {
        return releaseDate.split("-")[0];
    }

    private static formatVoteAverage(voteAverage: number) {
        return Number.parseFloat(voteAverage.toFixed(2));
    }

    public static async getMovies(uri: string, page: number, allMovies?: boolean,): Promise<MovieOrTvData[]> {
        const url = `${BASE_URL}${uri}?api_key=${API_KEY}&language=pt-BR&page=${page}&sort_by=popularity.desc&region=BR`;
        const request = await axios.get(url);

        const response: MovieOrTvData[] = request.data.results.map((movie: any) => {
            return {
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                poster_path: movie.poster_path,
                genres: movie.genre_ids.map((id: number) => this.getGenre(id)),
                vote_average: this.formatVoteAverage(movie.vote_average),
                release_year: this.getReleaseYear(movie.release_date),
                type: "movie"
            }
        });

        if (allMovies) {
            return response;
        } else {
            return response.filter((movie: MovieOrTvData, index: number) => {
                return index <= 11;
            });
        }
    }

    public static async getMovie(id: string | undefined): Promise<MovieOrTvData> {
        const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&region=BR`;
        const request = await axios.get(url);

        return {
            id: request.data.id,
            title: request.data.title,
            backdrop_path: request.data.backdrop_path,
            poster_path: request.data.poster_path,
            vote_average: this.formatVoteAverage(request.data.vote_average),
            genres: request.data.genres.map((genre: any) => this.getGenre(genre.id)),
            overview: request.data.overview,
            release_year: this.getReleaseYear(request.data.release_date),
            type: "movie"
        };
    }

    public static async getTvShows(uri: string, page: number, allShows?: boolean): Promise<MovieOrTvData[]> {
        const url = `${BASE_URL}${uri}?api_key=${API_KEY}&language=pt-BR&page=${page}&sort_by=popularity.desc`;
        const request = await axios.get(url);

        const response: MovieOrTvData[] = request.data.results.map((tv: any) => {
            return {
                id: tv.id,
                title: tv.name,
                overview: tv.overview,
                poster_path: tv.poster_path,
                genres: tv.genre_ids.map((id: number) => this.getGenre(id)),
                vote_average: this.formatVoteAverage(tv.vote_average),
                release_year: this.getReleaseYear(tv.first_air_date),
                number_of_seasons: tv.number_of_seasons,
                type: "tv"
            }
        });

        if (allShows) {
            return response;
        } else {
            return response.filter((_, index: number) => {
                return index <= 11;
            });
        }
    }

    public static async getTvShow(id: string | undefined): Promise<MovieOrTvData> {
        const url = `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&region=BR`;
        const request = await axios.get(url);

        return {
            id: request.data.id,
            title: request.data.name,
            backdrop_path: request.data.backdrop_path,
            poster_path: request.data.poster_path,
            vote_average: this.formatVoteAverage(request.data.vote_average),
            genres: request.data.genres.map((genre: any) => this.getGenre(genre.id)),
            overview: request.data.overview,
            number_of_seasons: request.data.number_of_seasons,
            release_year: this.getReleaseYear(request.data.first_air_date),
            type: "tv"
        };
    }

    public static async getSearch(query: string, page: number): Promise<MovieOrTvData[]> {
        const url = `${BASE_URL}/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}&page=${page}&language=pt-BR`;
        const request = await axios.get(url);
        const requestFiltered = request.data.results.filter((movie: any) => movie.media_type === "movie" || movie.media_type === "tv");

        return requestFiltered.map((movie: any) => {
            return {
                id: movie.id,
                title: movie.title || movie.name,
                overview: movie.overview,
                poster_path: movie.poster_path,
                genres: movie.genre_ids.map((id: number) => this.getGenre(id)),
                vote_average: this.formatVoteAverage(movie.vote_average),
                type: movie.media_type
            }
        });
    }
}