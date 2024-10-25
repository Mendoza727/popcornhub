import React, { useEffect, useState } from 'react'
import { Movie } from '../core/entities/Movie.entity';

import * as UseCases from '../core/use-cases';
import { MovieDBFetcher } from '../config/adapters/MovieDB.adapters';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoader();
    }, []);

    const initialLoader = async() => {
        const nowPlayingResults = await UseCases.MoviesNowPlayingUseCase(MovieDBFetcher);
    }

  return {

  }
}
