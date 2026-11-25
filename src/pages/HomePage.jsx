import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../api/moviesApi"
import MovieCard from "../components/MovieCard/MovieCard"
import { Link } from "react-router-dom"
export default function Home(){
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const trendingMovies = async () => {
            try{
                const data = await fetchTrendingMovies();
                setMovies(data.results)
            } catch(error){
                console.log(error)
            }
        }
        trendingMovies()
    }, [])
    return(
        <>
            <h1>Trending today</h1>
            <ul>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <li><Link to={`/movies/${movie.id}`}>{movie.original_title}</Link></li>
                    </div>
                ))}
            </ul>
        </>
    )
}
//propTypes