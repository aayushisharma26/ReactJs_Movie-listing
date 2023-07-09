import Action from "./Action.js"

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
                <Action/>
                
               
                
            </div>
            
        
        </div>

    );
}

export default Movie_row;
