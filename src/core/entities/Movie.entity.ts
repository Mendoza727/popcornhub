export interface Movie {
    id: number | string;
    title: string;
    description: string;
    releaseDate: Date;
    rating: number | string;
    poster: string;
    backdrop: string;
    contain_video: boolean;
    is_adult: boolean;
    lenguage_created: string;
}