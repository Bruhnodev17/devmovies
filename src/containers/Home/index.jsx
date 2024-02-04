import Button from "../../components/Button"
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import { useState, useEffect } from "react"

function Home() {
    const [movie, setMovie] = useState()


    useEffect(() => {

        async function getMovies() {

            const { data: {results} } = await api.get("/movie/popular")
            setMovie(results[3])
        }
        getMovies()
    }, [])



    return (
        <>
            {movie && (
                <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

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
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="imagem-capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
        </>
    )
}

export default Home