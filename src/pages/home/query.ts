export const fetchMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjkwNWQ5NjdiMDE4NTJkMmM3ZmE3NzBiNGJhYzYzYiIsInN1YiI6IjY1YjdmZTg2OGM3YjBmMDE4MzRhODBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hh4ZCoBpYPxfdSJi6YoDCSuo0m8soIEoaDtRSt_YNN0",
            },
        }
    );

    return res.json();
};

export const fetchTvShows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjkwNWQ5NjdiMDE4NTJkMmM3ZmE3NzBiNGJhYzYzYiIsInN1YiI6IjY1YjdmZTg2OGM3YjBmMDE4MzRhODBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hh4ZCoBpYPxfdSJi6YoDCSuo0m8soIEoaDtRSt_YNN0",
            },
        }
    );

    return res.json();
};