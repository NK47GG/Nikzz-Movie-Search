import "./App.css";
import { getMovieList, searchMovie, genreMovie } from "./api";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPrimary from "./component/navbar";
// setelah API dipanggil, datanya masih async, sehingga masih perlu menggunakan then()
// kode tersebut berartikan dari movie list yang didapatkan melalui API akan masuk ke dalam popularMovies yang akan diproses lebih lanjut.

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((movies) => {
      setPopularMovies(movies);
    });
  }, []);

  const PopularMovies = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`}
            alt="Reload"
          />
          <div className="Movie-date">released: {movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };
  // Jadi kita buat function PopularMovieList untuk menampung semua data API nya, lalu diubah menjadi div. lalu masukan hasil mapping pada div tersebut berdasarkan data yang diambil pada API.
  // const search = async (q) => {
  //   if (q.length >= 3) {
  //     const query = await searchMovie(q);
  //     setPopularMovies(query.results);
  //     console.log({ query: query });
  //   }
  // };

  // const [isNotif, setIsNotif] = useState(false);

  // const notif = () => {
  //   setIsNotif(!false);
  //   setTimeout(() => {
  //     setIsNotif((state) => !state);
  //   }, 1000);
  // };

  //Kode search tersebut mengambil API untuk search yang diambil di file api.js, kemudian api tersebut dimasukan ke dalam variable  query yang akan diambil nilainya untuk dimasukan ke dalam popular movies yang tadinya dipakai untuk meletakan movieList.

  // Asycn dan await dipakai ketika ingin memproses sesuatu yang memerlukan waktu yang lumayan lama, seperti proses data tertentu. Fungsinya adalah agar program dapat berjalan secara bersamaan, tidak menunggu satu fungsi yang lama.
  const handleSearch = async (searchValue) => {
    const query = await searchMovie(searchValue);
    setPopularMovies(query.results);
    // output search value ke console
    // lakukan apapun yang ingin kamu lakukan dengan value searchValue
  };

  const handleGenre = async (genreValue) => {
    const query = await genreMovie(genreValue);
    setPopularMovies(query.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavbarPrimary searchValue={handleSearch} genreValue={handleGenre} />
        {/* <button className="btn" onClick={notif}>
          {isNotif ? "Notif ON" : "Notif OFF"}
        </button> */}
        {/* <h1 style={{ marginTop: "2em" }}>Movie Search Website</h1> */}
        {/* <input
          className="Movie-search"
          placeholder="Search film..."
          onChange={({ target }) => search(target.value)}
        /> */}
        <div className="Movie-container">
          <PopularMovies />
        </div>
      </header>
    </div>
  );
};

export default App;
