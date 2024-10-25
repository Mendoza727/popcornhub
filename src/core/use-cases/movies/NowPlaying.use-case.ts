import { HttpAdpater } from "../../../config/adapters/Http/Http.adapters";
import { NowPlayingResponses } from "../../../infrastructure";
import { Movie } from "../../entities/Movie.entity";

export const MoviesNowPlayingUseCase = async(  fetcher: HttpAdpater ): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponses>('/now_playing')
        console.log({nowPlaying});    


        return [];
    } catch (error) {
        throw new Error(`Error fetching - nowPlaying ERR: ${error}`);
    }
}