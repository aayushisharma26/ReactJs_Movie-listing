const Delete = ()=>{
    return(
        <>
            <div className="delete">
                <img src="delete.svg" />
               
            </div>

        

            <div className="like" onClick={handleLikeClick}><img src="image.svg" /></div>
        </>
    );
}

export default Delete;
