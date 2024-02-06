import Button from "../../components/Button"
import Slider from "../../components/Slider"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import { getImages } from "../../utils/getImages"
import { useState, useEffect } from "react"
import Modal from "../../components/Modal"
import { useNavigate } from "react-router-dom"
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from "../../services/getData"

function Home() {
    const [movie, setMovie] = useState()

    const [topMovies, setTopMovies] = useState()

    const [topSeries, setTopSeries] = useState()

    const [popularSeries, setPopularSeries] = useState()

    const [topPeople, setTopPeople] = useState()

    const [showModal, setShowModal] = useState(false)
    
    const navigate = useNavigate()

    useEffect(() => {

        async function getAllData() {

            setMovie(await getMovies())
            setTopMovies(await getTopMovies())
            setTopSeries(await getTopSeries())
            setPopularSeries(await getPopularSeries())
            setTopPeople(await getTopPeople())
        }
        getAllData()
    }, [])



    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && 
                    <Modal movieId={movie.id} setShowModal={setShowModal}/>}

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista agora</Button>
                                <Button red={false} onClick={() => setShowModal(true)}>Assista ao trailer</Button>
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