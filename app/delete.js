const Delete = (props)=>{
    return(
        <>
            <div className="delete">


                <div onClick ={props.onDelete}><img src="delete.svg"/></div>
            </div>

            


        </>
    );
}

export default Delete;
