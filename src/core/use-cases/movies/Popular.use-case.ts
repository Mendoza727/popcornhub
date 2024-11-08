import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { MovieDBMoviesResponse   } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/Movie.entity";

interface Options {
    page?: number,
    limit?: number
}

export const MoviePopularUseCase = async(  fetcher: HttpAdpater, options?: Options ): Promise<Movie[]> => {
    try {
        const Popular = await fetcher.get<MovieDBMoviesResponse>('/popular', {
            params: {
                page: options?.page ?? 1,           
            }
        });

        return Popular.results.map( MovieMapper.fromMovieDBResultToEntity );
    } catch (error) {
        throw new Error(`Error fetching - Popular ERR: ${error}`);
    }   
}