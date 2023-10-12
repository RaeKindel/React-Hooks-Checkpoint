import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Never Have I Ever",
      description:
        "The complicated life of a first-generation Indian-American teenage girl, inspired by Mindy Kaling's own childhood.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2mbwphv6H3ukH_StfoukqJJey4kiKkyFRQ&usqp=CAU",
      rating: 8,
    },
    {
      title: "House M.D.",
      description: "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIqU9UqRCKTq0HpeceYcde1TLhHsXGgLjcg&usqp=CAU",
      rating: 9,
    },
    {
      title: "SE7EN",
      description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      posterURL:
        "data:image/jpeg;base64,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",
      rating: 9,
    },
    {
      title: "The Governor",
      description: "The Governor is the riveting tale of Angela Ochello, the Deputy Governor of Savannah State, who with no governorship ambitions finds herself suddenly entangled in a web of political intrigue after the untimely death of the incumbent Governor. As audiences embark on this journey with Angela, they get to see how with the help of her trusted Chief of Staff, she learns how to maneuver through the rough and shark-infested waters of politics whilst balancing the demands of her matrimonial home.",
      posterURL:
        "data:image/jpeg;base64,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",
      rating: 8,
    },

    // Add more movies here...
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const handleTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRateChange = (event) => {
    setFilterRate(event.target.value);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating.toString().includes(filterRate)
  );

  const addMovie = () => {
    const newMovie = {
      title: "New Movie",
      description: "New Description",
      posterURL: "https://example.com/newmovie.jpg",
      rating: 9,
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter
        title={filterTitle}
        rate={filterRate}
        handleTitleChange={handleTitleChange}
        handleRateChange={handleRateChange}
      />
      <button onClick={addMovie}>Add Movie</button>
      <MovieList className="movie-grid" movies={filteredMovies} />
    </div>
  );
};

export default App;
