export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjkwNWQ5NjdiMDE4NTJkMmM3ZmE3NzBiNGJhYzYzYiIsInN1YiI6IjY1YjdmZTg2OGM3YjBmMDE4MzRhODBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hh4ZCoBpYPxfdSJi6YoDCSuo0m8soIEoaDtRSt_YNN0",
            },
        }
    );

    return res.json();
};