import Likedislike from "./likedislike.js";
import Delete from "./delete.js";
import './globals.css'
const Movie_row = (props) => {
    return (
        <div className="row">
            <div className="coll">
                <img src={props.imageurl} alt="Flowers in Chania" />
            </div>
            <div className="colll">
                <div className="col_text">
                    <h1>{props.Name}</h1>
                    <h4>{props.votes}</h4>
                    <h4>{props.year}</h4>
                    <h4>{props.duration}</h4>
                    <h4>{props.genre}</h4>
                    <p>{props.description}</p>
                    <div className="action_row">
                        <Likedislike />
                        <Delete onDelete={props.onDelete} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Movie_row;
