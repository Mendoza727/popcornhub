import React, { useEffect, useState, useRef } from "react";
import { Movie } from "../core/entities/Movie.entity";
import * as UseCases from "../core/use-cases";
import { MovieDBFetcher } from "../config/adapters/MovieDB.adapters";

export const useMovies = () => {
  const nowPlayingPageNumber = useRef(1);
  const popularPageNumber = useRef(1);
  const topRatedPageNumber = useRef(1);
  const upcomingPageNumber = useRef(1);

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingResults, setNowPlayingResults] = useState<Movie[]>([]);
  const [upcomingResults, setUpcomingResults] = useState<Movie[]>([]);
  const [topRatedResults, setTopRatedResults] = useState<Movie[]>([]);
  const [popularResults, setPopularResults] = useState<Movie[]>([]);

  const isFetchingNextPage = useRef({
    nowPlaying: false,
    popular: false,
    topRated: false,
    upcoming: false,
  });

  useEffect(() => {
    initialLoader();
  }, []);

  const initialLoader = async () => {
    setIsLoading(true);
    try {
      const nowPlayingPromise =
        UseCases.MoviesNowPlayingUseCase(MovieDBFetcher);
      const upcomingPromise = UseCases.MovieUpcomingUseCase(MovieDBFetcher);
      const topRatedPromise = UseCases.MovieTopRatedUseCase(MovieDBFetcher);
      const popularPromise = UseCases.MoviePopularUseCase(MovieDBFetcher);

      const [nowPlayingMovies, upcommingMovies, topRatedMovies, popularMovies] =
        await Promise.all([
          nowPlayingPromise,
          upcomingPromise,
          topRatedPromise,
          popularPromise,
        ]);

      setNowPlayingResults(nowPlayingMovies);
      setUpcomingResults(upcommingMovies);
      setTopRatedResults(topRatedMovies);
      setPopularResults(popularMovies);
    } catch (error) {
      console.error("Error al cargar películas:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
  };

  const nowPlayingNextPage = async () => {
    if (isFetchingNextPage.current.nowPlaying) return;
    isFetchingNextPage.current.nowPlaying = true;
    nowPlayingPageNumber.current++;
    try {
      const nowPlayingMovies = await UseCases.MoviesNowPlayingUseCase(
        MovieDBFetcher,
        { page: nowPlayingPageNumber.current }
      );
      setNowPlayingResults((prev) => [
        ...prev,
        ...nowPlayingMovies.filter(
          (movie) => !prev.some((prevMovie) => prevMovie.id === movie.id)
        ),
      ]);
    } catch (error) {
      console.error("Error fetching next page for Now Playing:", error);
    } finally {
      isFetchingNextPage.current.nowPlaying = false;
    }
  };

  const popularNextPage = async () => {
    if (isFetchingNextPage.current.popular) return;
    isFetchingNextPage.current.popular = true;
    popularPageNumber.current++;
    try {
      const popularMovies = await UseCases.MoviePopularUseCase(MovieDBFetcher, {
        page: popularPageNumber.current,
      });
      setPopularResults((prev) => [
        ...prev,
        ...popularMovies.filter(
          (movie) => !prev.some((prevMovie) => prevMovie.id === movie.id)
        ),
      ]);
    } catch (error) {
      console.error("Error fetching next page for Popular:", error);
    } finally {
      isFetchingNextPage.current.popular = false;
    }
  };

  const topRatedNextPage = async () => {
    if (isFetchingNextPage.current.topRated) return;
    isFetchingNextPage.current.topRated = true;
    topRatedPageNumber.current++;
    try {
      const topRatedMovies = await UseCases.MovieTopRatedUseCase(
        MovieDBFetcher,
        {
          page: topRatedPageNumber.current,
        }
      );
      setTopRatedResults((prev) => [
        ...prev,
        ...topRatedMovies.filter(
          (movie) => !prev.some((prevMovie) => prevMovie.id === movie.id)
        ),
      ]);
    } catch (error) {
      console.error("Error fetching next page for Top Rated:", error);
    } finally {
      isFetchingNextPage.current.topRated = false;
    }
  };

  const upCommingNextPage = async () => {
    if (isFetchingNextPage.current.upcoming) return;
    isFetchingNextPage.current.upcoming = true;
    upcomingPageNumber.current++;
    try {
      const upCommingMovies = await UseCases.MovieUpcomingUseCase(
        MovieDBFetcher,
        {
          page: upcomingPageNumber.current,
        }
      );
      setUpcomingResults((prev) => [
        ...prev,
        ...upCommingMovies.filter(
          (movie) => !prev.some((prevMovie) => prevMovie.id === movie.id)
        ),
      ]);
    } catch (error) {
      console.error("Error fetching next page for Upcoming:", error);
    } finally {
      isFetchingNextPage.current.upcoming = false;
    }
  };

  return {
    isLoading,
    nowPlayingResults,
    upcomingResults,
    topRatedResults,
    popularResults,

    // methods
    nowPlayingNextPage,
    popularNextPage,
    topRatedNextPage,
    upCommingNextPage
  };
};
