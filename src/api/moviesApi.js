const URL = 'https://api.themoviedb.org/3'
const API_KEY = '9403ca40a64b5fea3005c643995ea379'

export const fetchMovies = async (url) => {
    try{
        const resp = await fetch(`${URL}${url}?api_key=${API_KEY}`)
        if(!resp.ok){
            throw new Error(`Error: ${resp.status}`)
        }
        const data = await resp.json()
        return data;

    } catch(error){
        console.log(error)
    }
}
export const fetchTrendingMovies = () => {
    return fetchMovies('/trending/movie/day')
}
