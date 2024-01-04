export interface IMovie {
    id: number;
    genre_ids: Array<number>,
    original_language: string;
    original_title: string;
    overview: string;
    title: string;
    poster_path: string;
    vote_average: string;
}