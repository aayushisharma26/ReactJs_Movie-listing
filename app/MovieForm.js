import React, { useState } from 'react';
import './movieForm.css';  

const MovieForm = ({ addMovie, setShowForm }) => {
    const [movie, setMovie] = useState({
        id: '',
        imageurl: '',
        name: '',
        votes: '',
        year: '',
        duration: '',
        genre: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie({ ...movie, id: new Date().getTime().toString() });
        setShowForm(false);
    };

    return (
        <form onSubmit={handleSubmit} className="movie-form">
            <h2>Add a New Movie</h2>
            <input type="text" name="imageurl" placeholder="Image URL" value={movie.imageurl} onChange={handleChange} required />
            <input type="text" name="name" placeholder="Name" value={movie.name} onChange={handleChange} required />
            <input type="text" name="votes" placeholder="Votes" value={movie.votes} onChange={handleChange} required />
            <input type="text" name="year" placeholder="Year" value={movie.year} onChange={handleChange} required />
            <input type="text" name="duration" placeholder="Duration" value={movie.duration} onChange={handleChange} required />
            <input type="text" name="genre" placeholder="Genre" value={movie.genre} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={movie.description} onChange={handleChange} required></textarea>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default MovieForm;
