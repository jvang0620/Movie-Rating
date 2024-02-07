export const fetchTvShowDetails = async (tvShowId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
        {
            headers: {
                Authorization:
                `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
            },
        }
    );

    return res.json();
};