const API_KEY = "31d362638d8091422fd6cc6d9503d706";
const API_READ_ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWQzNjI2MzhkODA5MTQyMmZkNmNjNmQ5NTAzZDcwNiIsInN1YiI6IjYzZDZiMjAxMjJkZjJlMDA3OTc2YTdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IqzOwyHfqfUHUcTe0psECNZ-J0o9LLk3QacjL3z4sgY";

export const searchMovieData = async (movieName) => {
    const query = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;
    const response = await fetch(query);
    return response.json();
};
export const getMovieById = async (id) => {
    const query = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-us`;
    const response = await fetch(query);
    return response.json();
};