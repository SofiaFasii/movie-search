import { useLocation } from "react-router-dom";
import { fetchMovieReviews } from "../api/moviesApi";
import { useEffect, useState } from "react"

export default function Reviews(){
    const [reviews, setReviews] = useState([])
    const location = useLocation()
    const movieId = location.pathname.split('/')[2]
    useEffect(() => {
        const getReviews = async () => {
            try{
                const data = await fetchMovieReviews(movieId)
                if(data){
                    setReviews(data.results)
                }
            } catch(error){
                console.log(error)
            }
        }
        getReviews()
    }, [movieId])
    return(
        <>
            {reviews.length > 0 ? 
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <h4>Author: {review.author}</h4>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
                : <p>We don't have any reviews for this movie.</p>}
        </>
    )
}