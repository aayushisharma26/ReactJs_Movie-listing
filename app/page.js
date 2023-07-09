"use client";

import MyComponen from "./featch_movie.js"
import Movie_row from "./movie_row.js"
import Footer from "./footer.js"
import Action from "./Action.js"

import './movie.css';



const App = () => {
 const people = [
    {
      id: 0,
      name: 'Dear Zindagi',
      profession: 'Drama Romance',
      Description: "It's a good movie",
      image: "image1.svg",
    },
    {
      id: 2,
      name: 'Mulan',
      profession: 'Adventurous Comedy',
      image: "Brave.png",
    },
    {
      id: 2,
      name: 'Mulan',
      profession: 'Adventurous Comedy',
      image: "Brave.png",
    },
    {
      id: 2,
      name: 'Mulan',
      profession: 'Adventurous Comedy',
      image: "Brave.png",
    }
  ];



  return (
    <>
        <MyComponen/>        
            {people.map(movie =>(
                <Movie_row
                    movie = {movie.name}
                    movie1= {movie.image}
                    moviee = {movie.name}
                   
                />
            ))}
            
        <Footer/>
        
    </>
  );
}

export default App;

