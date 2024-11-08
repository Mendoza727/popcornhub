// Main Response Interfaces
export interface NowPlayingResponses {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface MovieDBMoviesResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

// Movie Detail Interface
export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Shared Entities
export interface Result {
  budget: number;
  genres: Genre[];
  revenue: number;
  production_companies: ProductionCompany[];
  runtime: number;
  status: string;
  tagline: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Supporting Entities
export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieTrailer {
  id:      number;
  results: TrailerResult[];
}

export interface TrailerResult {
  iso_639_1:    string;
  iso_3166_1:   string;
  name:         string;
  key:          string;
  site:         string;
  size:         number;
  type:         Type;
  official:     boolean;
  published_at: Date;
  id: number
}

export type Type = "Teaser" | "Featurette" | "Trailer";
export interface CastingMovie {
  id:   number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: Department;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         string;
  cast_id?:             number;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          Department;
  job?:                 string;
}

export type Department = "Acting" | "Crew" | "Visual Effects" | "Writing" | "Production" | "Directing" | "Camera" | "Art" | "Editing" | "Costume & Make-Up" | "Sound" | "Lighting";
