import React from 'react';
 
const MovieList = ({ movie }) => {

    return(
 
        <div className="main">
            <div className="card">   
                <div className="rows">
                    <div className="column">
                        <img src={movie.Poster}  
                        alt="Avatar" 
                        style={{width:'130px', 
                                height:"200px", 
                                marginLeft:"3px"}}/>
                    </div>
                    <div className="columnright">
                        <h2>Title: {movie.Title} </h2>
                        <p>Year: {movie.Year} &nbsp;&nbsp;&nbsp; 
                           Type:  {movie.Type}</p>
                        <p>Plot (short):</p>
                        <p className="text"> {movie.Plot} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 

export default MovieList;