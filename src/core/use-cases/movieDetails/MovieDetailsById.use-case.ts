import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { MovieDetails } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullDetailsMovie } from "../../entities/Movie.entity";

export const getMovieByIdCaseUse = async(
    fetcher: HttpAdpater,
    movieId: number
): Promise<FullDetailsMovie> => {

    const movie = await fetcher.get<MovieDetails>(`/${movieId}`);

    const fullMovieMapper = MovieMapper.fromMovieById( movie );
    return fullMovieMapper;
}