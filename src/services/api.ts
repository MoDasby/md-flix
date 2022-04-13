import axios from "axios";
import genres from "../utils/genres";
import { MovieOrTvData } from "../interfaces/MovieOrTvData";

const API_KEY = "bc05d5c6bd8279db7d5253fffbb3b1f3"
const BASE_URL = "https://api.themoviedb.org/3"


export default class Api {

    private static getGenre(id: number): string {
        const genre = genres.find(g => g.id === id);
        return genre ? genre.name : "";
    }

    public static async getMovies(uri: string, page: number, allMovies?: boolean): Promise<MovieOrTvData[]> {
        const url = `${BASE_URL}${uri}?api_key=${API_KEY}&language=pt-BR&page=${page}&sort_by=popularity.desc`;
        const request = await axios.get(url);

        const response: MovieOrTvData[] = request.data.results.map((movie: any) => {
            return {
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                poster_path: movie.poster_path,
                genres: movie.genre_ids.map((id: number) => Api.getGenre(id)),
                vote_average: movie.vote_average,
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
        const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc`;
        const request = await axios.get(url);
        console.log(request.data);
        const response: MovieOrTvData = {
            id: request.data.id,
            title: request.data.title,
            backdrop_path: request.data.backdrop_path,
            poster_path: request.data.poster_path,
            vote_average:request.data.vote_average,
            genres: request.data.genres.map((genre: any) => Api.getGenre(genre.id)),
            overview: request.data.overview,
            type: "movie"
        }

        return response;
    }

    public static async getTvShows(uri: string, page: number, allMovies?: boolean): Promise<MovieOrTvData[]> {
        const url = `${BASE_URL}${uri}?api_key=${API_KEY}&language=pt-BR&page=${page}&sort_by=popularity.desc`;
        const request = await axios.get(url);

        const response: MovieOrTvData[] = request.data.results.map((movie: any) => {
            return {
                id: movie.id,
                title: movie.name,
                overview: movie.overview,
                poster_path: movie.poster_path,
                genres: movie.genre_ids.map((id: number) => Api.getGenre(id)),
                vote_average: movie.vote_average,
                release_date: movie.release_date,
                number_of_seasons: movie.number_of_seasons,
                type: "tv"
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

    public static async getTvShow(id: string | undefined): Promise<MovieOrTvData> {
        const url = `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc`;
        const request = await axios.get(url);
        const response: MovieOrTvData = {
            id: request.data.id,
            title: request.data.name,
            backdrop_path: request.data.backdrop_path,
            poster_path: request.data.poster_path,
            vote_average:request.data.vote_average,
            genres: request.data.genres.map((genre: any) => Api.getGenre(genre.id)),
            overview: request.data.overview,
            number_of_seasons: request.data.number_of_seasons,
            type: "tv"
        }

        return response;
    }
}