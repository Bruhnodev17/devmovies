import Button from "../../components/Button"
import Slider from "../../components/Slider"
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import { getImages } from "../../utils/getImages"
import { useState, useEffect } from "react"
import Modal from "../../components/Modal"

function Home() {
    const [movie, setMovie] = useState()

    const [topMovies, setTopMovies] = useState()

    const [topSeries, setTopSeries] = useState()

    const [popularSeries, setPopularSeries] = useState()

    const [topPeople, setTopPeople] = useState()
    


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

        async function getTopSeries() {

            const { data: {results} } = await api.get("/tv/top_rated")
            setTopSeries(results)
            console.log(results)
        }

        async function getPopularSeries() {

            const { data: {results} } = await api.get("/tv/popular")
            setPopularSeries(results)
            console.log(results)
        }

        async function getTopPeople() {

            const { data: {results} } = await api.get("/person/popular")
            setTopPeople(results)
            console.log(results)
        }
        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopPeople()
    }, [])
 


    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    <Modal movieId={movie.id}/>

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
            {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
            {popularSeries && <Slider info={popularSeries} title={"Séries Populares"} />}
            {topPeople && <Slider info={topPeople} title={"Top Artistas"} />}
        </>
    )
}

export default Home