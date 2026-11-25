import { useState, useEffect} from "react"
import { Outlet, Link, useNavigate, useLocation} from "react-router-dom"
import { fetchMovieDetails } from "../../api/moviesApi"
import { Wrapper, Container, Box, Box2 } from "./movieCard.styled"

export default function MovieCard(){
    const [movie, setMovie] = useState(null)
    const location = useLocation()
    const movieId = location.pathname.split('/')[2]
    useEffect(() => {
            const getDetails = async () => {
                try{
                    const data = await fetchMovieDetails(movieId);
                    if(data){
                        setMovie(data)
                    }
                } catch(error){
                    console.log(error)
                }
            }
        getDetails()
    }, [movieId])
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return(
        <>
            {movie && 
                <Wrapper> 
                    <button onClick={handleBack}>⬅ Go back</button>
                    <Container>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.original_title}`} />
                        <Box>
                            <h2>{movie.title}</h2>
                            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h4>Genres</h4>
                            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                        </Box>
                    </Container>
                    <Box2>
                        <p>Additional information</p>
                        <ul>
                            <li><Link to={'cast'}>Cast</Link></li>
                            <li><Link to={'reviews'}>Reviews</Link></li>
                        </ul>
                    </Box2>
                    <Outlet/>
                </Wrapper>
            }
        </>
    )
}