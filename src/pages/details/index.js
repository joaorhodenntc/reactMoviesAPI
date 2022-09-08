import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container } from "./style"


function Details(){

    const image_path = 'https://image.tmdb.org/t/p/original'

    const {id} = useParams()
    
    const [movie, setMovie] = useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9686d0c3d5d6bdbb5d5694c68488db42&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovie(data))
    },[id])

    return(
        <Container>
            <img src={`${image_path}${movie.poster_path}`} alt={`${movie.title}`}/>
            <div className="details">
                <h1>{movie.title}</h1>
                <span>Sinope: {movie.overview}</span>
                <span className="release-date">Release date: {movie.release_date}</span>
                <Link to={`/`}>
                    <button>Go back</button>
                </Link>
            </div>
        </Container>
    )
}

export default Details