import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { MovieTrailer } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { TrailerMovie } from "../../entities/Movie.entity";

interface options {
    language?: string
} 


export const getTrailerMovieById = async(
    fetcher: HttpAdpater,
    movieId: number,
    option?: options
): Promise<TrailerMovie[]> => {
    const trailer = await fetcher.get<MovieTrailer>(`/${movieId}/videos`);

    return trailer.results.map( MovieMapper.fromMovieTrailerId )
}