import React, { useEffect, useRef, useState } from "react";
import * as UseCase from "../core/use-cases";
import { MovieDBFetcher } from "../config/adapters/MovieDB.adapters";
import { FullDetailsMovie, MovieCasting, TrailerMovie } from "../core/entities/Movie.entity";

export const useMovie = (idMovie: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetails] = useState<FullDetailsMovie>();
  const [trailerDetail, setTrailerDetails] = useState<TrailerMovie[]>([]);
  const [castingDetail, setCastingDetails] = useState<MovieCasting[]>([]);

  useEffect(() => {
    loadMovie();
  }, [idMovie]);

  const loadMovie = async () => {
    setIsLoading(true);

    const movieDetailsPromise = UseCase.getMovieByIdCaseUse(
      MovieDBFetcher,
      idMovie
    );
    const trailerDetailsPromise = UseCase.getTrailerMovieById(
      MovieDBFetcher,
      idMovie
    );

    const movieCastingPromise = UseCase.getMovieCastUseCase(
      MovieDBFetcher,
      idMovie
    );

    const repartCastingPromise = UseCase.getMovieCastUseCase(
      MovieDBFetcher,
      idMovie
    );
    try {
      const [movieDetailsResults, movieTrailerResults, castingMovieResults, repartCastingResults] = await Promise.all([
        movieDetailsPromise,
        trailerDetailsPromise,
        movieCastingPromise,
        repartCastingPromise
      ]);

      setMovieDetails(movieDetailsResults);
      setTrailerDetails(movieTrailerResults);
      setCastingDetails(castingMovieResults);
    } catch (error) {
      throw new Error("Error fetching hook useMovie: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    movieDetail,
    trailerDetail,
    castingDetail,
  };
};
