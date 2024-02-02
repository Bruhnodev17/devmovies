import api from "../../services/api"
import { Background } from "./styles"
import { useState } from "react"

function Home() {

    async function getMovies() {

        const [movie, setMovie] = useState()

        const data = await api.get("/movie/popular")
        setMovie(data.data.results[1])
        console.log(movie)
        console.log(data)
    }
    getMovies()

    return (
        <Background img="">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </Background>
    )
}

export default Home