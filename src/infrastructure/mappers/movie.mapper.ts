import { Movie } from "../../core/entities/Movie.entity";
import type { Result } from "../Interfaces/Movies.Interfaces";

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      original_title: result.original_title,
      description: result.overview,
      releaseDate: new Date( result.release_date ),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      contain_video: result.video,
      is_adult: result.adult,
      lenguage_created: result.original_language,
    };
  }
}
