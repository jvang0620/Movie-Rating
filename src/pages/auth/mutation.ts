export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjkwNWQ5NjdiMDE4NTJkMmM3ZmE3NzBiNGJhYzYzYiIsInN1YiI6IjY1YjdmZTg2OGM3YjBmMDE4MzRhODBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hh4ZCoBpYPxfdSJi6YoDCSuo0m8soIEoaDtRSt_YNN0",
            },
        }
    );

    // Wait for the JSON response and log it
    const data = await res.json();
    console.log(data);

    return data;

};