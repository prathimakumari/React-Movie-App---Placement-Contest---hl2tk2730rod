const API_KEY = "0b9e9a5023535f05afb102db4dc6a741";
const API_READ_ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjllOWE1MDIzNTM1ZjA1YWZiMTAyZGI0ZGM2YTc0MSIsInN1YiI6IjYzZDc1ZjA3MjJkZjJlMDA4NDNhZTNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2bA_qtzp5vmi0VfgOqfwoFs_3_9k4qzErV9tsRejTs8";

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
