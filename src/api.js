import axios from "axios";
const baseURL = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseURL}/movie/popular?api_key=${apiKey}&page=1`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${q}&api_key=${apiKey}&page=1`
  );
  return search.data;
};

export const genreMovie = async (genres) => {
  const genre = await axios.get(
    `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=${genres}`
  );
  return genre.data;
};

// syarat consume API itu pake axios
// Jadi kalau mau consume API akan menggunakan asynchronous, jadi diperlukan pakai method async lalu await, bisa juga dengan then().

// Genre IDs:

// Movies
// https://developers.themoviedb.org/3/genres/get-movie-list
// https://api.themoviedb.org/3/genre/movie/list?api_key=[MY_KEY]&language=en-US

// MOVIE
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37
// TV Show
// https://developers.themoviedb.org/3/genres/get-tv-list
// https://api.themoviedb.org/3/genre/tv/list?api_key=[MY_KEY]&language=en-US

// TV SHOW
// Action & Adventure  10759
// Animation           16
// Comedy              35
// Crime               80
// Documentary         99
// Drama               18
// Family              10751
// Kids                10762
// Mystery             9648
// News                10763
// Reality             10764
// Sci-Fi & Fantasy    10765
// Soap                10766
// Talk                10767
// War & Politics      10768
// Western             37
