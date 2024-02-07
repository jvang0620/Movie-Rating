export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization:
                `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
            },
        }
    );

    // Wait for the JSON response and log it
    const data = await res.json();
    console.log(data);

    return data;

};