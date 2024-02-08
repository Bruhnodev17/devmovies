import { useParams } from "react-router-dom"
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData"
import { Container } from "./styles"
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
function Details() {
    console.log(useParams())

    useEffect(() => {

        const { id } = useParams()

        const [movie, setMovie] = useState()
        const [movieVideos, setMovieVideos] = useState()
        const [movieCredits, setMovieCredits] = useState()
        const [movieSimilar, setMovieSimilar] = useState()

        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
            ])
                .then(([movie, videos, credits, similar]) => {
                    console.log({ movie, videos, credits, similar})
                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                })
                .catch((error) => console.log(error))
        }
        getAllData()
    }, [])

    return (
        <Container>
            <div>Detalhes</div>
        </Container>
    )
}

export default Details
