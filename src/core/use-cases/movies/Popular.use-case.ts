import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { MovieDBMoviesResponse   } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/Movie.entity";

export const MoviePopularUseCase = async(  fetcher: HttpAdpater ): Promise<Movie[]> => {
    try {
        const Popular = await fetcher.get<MovieDBMoviesResponse>('/popular');

        return Popular.results.map( MovieMapper.fromMovieDBResultToEntity );
    } catch (error) {
        throw new Error(`Error fetching - Popular ERR: ${error}`);
    }   
}