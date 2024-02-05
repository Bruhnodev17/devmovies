import Button from "../../components/Button"
import Slider from "../../components/Slider"
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import { getImages } from "../../utils/getImages"
import { useState, useEffect } from "react"

function Home() {
    const [movie, setMovie] = useState()

    const [topMovies, setTopMovies] = useState()

    useEffect(() => {

        async function getMovies() {

            const { data: {results} } = await api.get("/movie/popular")
            setMovie(results[3])
        }
        async function getTopMovies() {

            const { data: {results} } = await api.get("/movie/top_rated")
            setTopMovies(results)
            console.log(results)
        }
        getMovies()
        getTopMovies()
    }, [])
 


    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true}>Assista agora</Button>
                                <Button red={false}>Assista ao trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="imagem-capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
        </>
    )
}

export default Home