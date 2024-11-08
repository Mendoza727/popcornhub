import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { MovieDBMoviesResponse } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/Movie.entity";

interface Options {
    page?: number,
    limit?: number
}

export const MovieTopRatedUseCase = async(fetcher: HttpAdpater, options?: Options): Promise<Movie[]> => {
    try {
        const TopRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: options?.page ?? 1
            }
        });

        return TopRated.results.map( MovieMapper.fromMovieDBResultToEntity );
    } catch (error) {
        throw new Error(`Error fetching - topRated ERR: ${error}`);
    }   
}