

function MovieDisplay({ movie }){

    
    const loaded = () => { 

        return(
            <div className="movieCard">
                {/* <h1> The MovieDisplay Component </h1> */}
                <h2> { movie.Title } </h2>
                <h3> { movie.Genre } </h3>
                <img src={movie.Poster} alt={ movie.Title } />
                <h3> { movie.Year } </h3>
                <h4> Starting: <br></br> {movie.Actors} </h4>
                <p> { movie.Plot } </p>
            </div>
        );
            };
        const loading = () => {
            return (
                <h1> No Movie to Display </h1>

            )
        }

    return movie ? loaded() : loading();    
};


export default MovieDisplay;