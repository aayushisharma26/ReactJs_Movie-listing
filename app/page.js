"use client";
import Header from "./header.js"
import Movie_row from "./movie_row.js"
import Footer from "./footer.js"
import './movie.css';
import { useState } from "react";
import { movies } from "./data.js";
import MovieForm from "./MovieForm.js";
import Modal from "./modal.js";  

const App = () => {
    const [data, setData] = useState(movies);
    const [showForm, setShowForm] = useState(false);

    const handleDelete = (id) => {
        const updatedData = data.filter((movie) => movie.id !== id);
        setData(updatedData);
    };

    const addMovie = (newMovie) => {
        setData([...data, newMovie]);
    };

    return (
        <>
            <Header />
            {data.map((movie) =>
                <Movie_row
                    key={movie.id}
                    Name={movie.name}
                    imageurl={movie.imageurl}
                    votes={movie.votes}
                    year={movie.year}
                    duration={movie.duration}
                    genre={movie.genre}
                    description={movie.description}
                    onDelete={() => handleDelete(movie.id)}
                />
            )}

            <Footer setShowForm={setShowForm} />  
            <Modal show={showForm} onClose={() => setShowForm(false)}>
                <MovieForm addMovie={addMovie} setShowForm={setShowForm} />
            </Modal>
        </>
    );
}

export default App;
