import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { MovieDBMoviesResponse } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/Movie.entity";

interface Options {
  page?: number;
  limit?: number;
}

export const MovieUpcomingUseCase = async (
  fetcher: HttpAdpater,
  options?: Options
): Promise<Movie[]> => {
  try {
    const Upcoming = await fetcher.get<MovieDBMoviesResponse>("/upcoming", {
        params: {
            page: options?.page ?? 1
        }
    });

    return Upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error(`Error fetching - upcoming ERR: ${error}`);
  }
};
