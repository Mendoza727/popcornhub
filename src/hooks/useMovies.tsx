import React, { useEffect, useState } from "react";
import { Movie } from "../core/entities/Movie.entity";

import * as UseCases from "../core/use-cases";
import { MovieDBFetcher } from "../config/adapters/MovieDB.adapters";

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingResults, setNowPlayingResults] = useState<Movie[]>([]);
  const [upcomingResults, setUpcomingResults] = useState<Movie[]>([]);
  const [topRatedResults, setTopRatedResults] = useState<Movie[]>([]);
  const [popularResults, setPopularResults] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoader();
  }, []);

  const initialLoader = async () => {
    setIsLoading(true); // Establecemos isLoading a true antes de cargar los datos
    try {
      const nowPlayingPromise =
        UseCases.MoviesNowPlayingUseCase(MovieDBFetcher);
      const upcomingPromise = UseCases.MovieUpcomingUseCase(MovieDBFetcher);
      const topRatedPromise = UseCases.MovieTopRatedUseCase(MovieDBFetcher);
      const PopularPromise = UseCases.MoviePopularUseCase(MovieDBFetcher);

      const [nowPlayingMovies, upcommingMovies, topRatedMovies, popularMovies] =
        await Promise.all([
          nowPlayingPromise,
          upcomingPromise,
          topRatedPromise,
          PopularPromise,
        ]);

      setNowPlayingResults(nowPlayingMovies);
      setUpcomingResults(upcommingMovies);
      setTopRatedResults(topRatedMovies);
      setPopularResults(popularMovies);
    } catch (error) {
      console.error("Error al cargar películas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    nowPlayingResults,
    upcomingResults,
    topRatedResults,
    popularResults,
  };
};
