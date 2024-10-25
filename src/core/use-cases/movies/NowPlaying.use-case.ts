import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { NowPlayingResponses } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/Movie.entity";

interface Options {
  page?: number;
  limit?: number;
}

export const MoviesNowPlayingUseCase = async (
  fetcher: HttpAdpater,
  options?: Options
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponses>("/now_playing", {
        params: {
            page: options?.page ?? 1
        }
    });

    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error(`Error fetching - nowPlaying ERR: ${error}`);
  }
};
