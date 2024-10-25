import axios from "axios";
import { AxiosAdapter } from "./Http/Axios.adapter";

import { THE_MOVIE_DB_KEY } from '@env';

export const MovieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    paramas: {
        api_key: THE_MOVIE_DB_KEY,
        language: 'es' // en proximas actualizacion sera a decision del usuario
    }
})