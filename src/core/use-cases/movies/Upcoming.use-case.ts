import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { MovieDBMoviesResponse } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/Movie.entity";

export const MovieUpcomingUseCase = async(  fetcher: HttpAdpater ): Promise<Movie[]> => {
    try {
        const Upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        return Upcoming.results.map( MovieMapper.fromMovieDBResultToEntity );
    } catch (error) {
        throw new Error(`Error fetching - upcoming ERR: ${error}`);
    }   
}