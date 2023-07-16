import Likedislike from "./likedislike.js";
import Delete from "./delete.js";
const Movie_row = (props)=>{
    return(

        <div className="row">
            
            <div className="coll">
                <img src={props.movie1} alt="Flowers in Chania"/> 
            </div>
            <div className="colll">
                <h1>{props.movie}</h1>
                <p>{props.moviee}</p>
                <h1>Description</h1>
                <div className="action_row"> 
                    <Likedislike/>
                    <Delete
                    {...props}
                />
                </div>
                
                



  
                
            </div>
            
            
        
        </div>

    );
}

export default Movie_row;
