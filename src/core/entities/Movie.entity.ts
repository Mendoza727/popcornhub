// Base Movie Interface
export interface Movie {
  id: number | string;
  title: string;
  original_title?: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
  contain_video: boolean;
  is_adult: boolean;
  lenguage_created: string;
}

// Full Details Movie Interface extending Base Movie
export interface FullDetailsMovie extends Movie {
  genres: Genre[];
  duration: number;
  budget: number;
  productionCompanies: ProductionCompany[];
  status_movie: string;
  tag: string;
  earnings: number;
}

// Supporting Entities
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

// Trailer Interface (potentially to be extended as needed)
export interface TrailerMovie {
  id: number;
  name: string,
  key: string,
  siteStored: string;
  resolutionTrailer: number;
  type: string;
  is_official: Boolean;
  publicated_at: Date;
}


export interface MovieCasting {
  id: number
  is_adult: Boolean;
  gender: number;
  role: string;
  name: string;
  originaName: string;
  popularityActor: number;
  profile: string;
  characterActing?: string;
  department?: string;
  job?: string;
}