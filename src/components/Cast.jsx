import { useLocation } from "react-router-dom"
import { fetchMovieCast } from "../api/moviesApi"
import { useEffect, useState } from "react"

export default function Cast(){
    const [cast, setCast] = useState(null)
    const location = useLocation() 
    const movieId = location.pathname.split('/')[2]
        useEffect(() => {
                const getCast = async () => {
                    try{
                        const data = await fetchMovieCast(movieId);
                        if(data){
                            setCast(data.cast)
                        }
                    } catch(error){
                        console.log(error)
                    }
                }
            getCast()
        }, [movieId])
    return(
        <ul>
            {cast && cast.map((c) => (
                <li key={c.id}>
                    {c.profile_path ? 
                        <img src={`https://image.tmdb.org/t/p/w200${c.profile_path}`} alt={c.name} width={100}/>
                        : <p>No photo</p>
                    }
                    <p>{c.name}</p>
                    <p>Character: {c.character}</p>
                </li>
            ))}
        </ul>
    )
}