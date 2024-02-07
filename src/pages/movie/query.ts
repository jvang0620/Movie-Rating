export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            headers: {
                Authorization:
                `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
            },
        }
    );

    return res.json();
};