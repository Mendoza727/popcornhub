import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { CastingMovie } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { MovieCasting } from "../../entities/Movie.entity";

export const getMovieCastUseCase = async(
    fetcher: HttpAdpater,
    movieId: number
): Promise<MovieCasting[]> => {
    try {
        const casting = await fetcher.get<CastingMovie>(`/${movieId}/credits`);

        return casting.cast.map( MovieMapper.fromCastDBMovieToEntity );
    } catch(error) {
        throw new Error("Error consult cast: "+error);
    }
}