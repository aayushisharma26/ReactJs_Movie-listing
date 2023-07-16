"use client";
import Header from "./header.js"
import MyComponen from "./featch_movie.js"
import Movie_row from "./movie_row.js"
import Footer from "./footer.js"
import './movie.css';
import Delete from "./delete.js";
import {useState} from "react";

const people = [
    {
      id: 0,
      name: 'Dear Zindagi',
      profession: 'Drama Romance',
      Description: "It's a good movie",
      image: "image_1.svg",
    },
    {
      id: 1,
      name: 'Mulan',
      profession: 'Adventurous Comedy',
      image: "Brave_img.svg",
    },
    {
      id: 2,
      name: 'Mulan',
      profession: 'Adventurous Comedy',
      image: "moana.svg",
    },
    {
      id: 3,
      name: 'Mulan',
      profession: 'Adventurous Comedy',
      image: "mulan.svg",
    }
  ];

const App = () => {
    const [data, setdata] = useState(people);

    const handleDelete =(id)=>{
        const updatedata = data.filter((movie)=> movie.id!== id);
        setdata(updatedata);
            
    };

    return (
        <>
            <MyComponen/>        
                {data.map((movie) =>
                    <Movie_row
                        movie = {movie.name}
                        movie1= {movie.image}
                        moviee = {movie.name}
                        onDelete={() => handleDelete(movie.id)}

                    />
                )}
            
            <Footer/>
        
        </>
    );
}

export default App;

