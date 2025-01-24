import React, {useState} from "react";
import MovieForm from "../../components/MovieForm/MovieForm.tsx";
import MovieItem from "../../components/MovieItem/MovieItem.tsx";
import {Movie} from "../../types";

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const addMovie = (title: string) => {
        setMovies((prevMovies) => [...prevMovies, {id: Math.random().toString(), title},
        ]);
    };

    const deleteMovie = (id: string) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };

    const editMovie = (id: string, newTitle: string) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? {...movie, title: newTitle} : movie
            )
        );
    };

    return (
        <div>
            <h1 className="text-center mb-4">Movie List</h1>
            <MovieForm onAddMovie={addMovie} />
            <ul className="list-group mt-4">
                {movies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        onDelete={deleteMovie}
                        onEdit={editMovie}
                    />
                ))}
            </ul>
        </div>
    );
};

export default MovieList;