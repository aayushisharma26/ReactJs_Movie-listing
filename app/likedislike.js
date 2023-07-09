import {useState} from "react";

const Likedislike = () =>{
    const [like, setLike] = useState(0);
  


    const handleLikeClick = () => {
    setLike(like + 1);
    };
    const handleDislikeClick = () => {
    setLike(like - 1);
    };

    return(
        <>
            <div className="like" onClick={handleLikeClick}><img src="image.svg" /></div>

            <div className="bo">{like}</div>
            <div className="dislike" onClick={handleDislikeClick}><img src="image.svg" /></div>
                
             
                
        </>
    );
};

export default Likedislike;

