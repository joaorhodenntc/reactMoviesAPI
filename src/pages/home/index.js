import { Container, Movie, MovieList } from "./style";
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home(){

    const image_path = 'https://image.tmdb.org/t/p/original'

    const [movies, setMovies] = useState([])

    useEffect(()=> {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=9686d0c3d5d6bdbb5d5694c68488db42&language=en-US&page=1')
        .then(response => response.json())
        .then(data => setMovies(data.results))
        
    },[])

    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                        <Movie key={movie.id}>

                            <Link to={`/details/${movie.id}`}>
                                <img src={`${image_path}${movie.poster_path}`}alt="Spider man"/>
                            </Link>

                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;