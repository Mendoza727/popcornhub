import { FullDetailsMovie, Movie, MovieCasting, TrailerMovie } from "../../core/entities/Movie.entity";
import type { Cast, MovieDetails, Result, TrailerResult } from "../Interfaces/Movies.Interfaces";

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      original_title: result.original_title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      contain_video: result.video,
      is_adult: result.adult,
      lenguage_created: result.original_language,
    };
  }

  static fromMovieById(movie: MovieDetails): FullDetailsMovie {
    return {
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      contain_video: movie.video,
      is_adult: movie.adult,
      lenguage_created: movie.original_language,
      genres: movie.genres,
      duration: movie.runtime,
      budget: movie.budget,
      tag: movie.tagline,
      status_movie: movie.status,
      earnings: movie.revenue,
      productionCompanies: movie.production_companies,
    };
  }

  static fromMovieTrailerId(trailerResults: TrailerResult): TrailerMovie {
    return {
      id: trailerResults.id,
      name: trailerResults.name || 'no name',
      key: trailerResults.key,
      type: trailerResults.type,
      siteStored: trailerResults.site,
      resolutionTrailer: trailerResults.size,
      is_official: trailerResults.official,
      publicated_at: new Date(trailerResults.published_at)
    }
  }

  static fromCastDBMovieToEntity(result: Cast): MovieCasting {
    return {
      id: result.id,
      name: result.name,
      originaName: result.original_name,
      gender: result.gender,
      is_adult: result.adult,
      profile: result.profile_path,
      characterActing: result.character,
      popularityActor: result.popularity,
      role: result.known_for_department,
      department: result.department,
      job: result.job
    }
  }
}
