import api from "../../services/api"
import { Background } from "./styles"

function Home() {

    async function getMovies() {
        const data = await api.get("/movie/popular")
        console.log(data)
    }
    getMovies()

    return (
        <Background img="">
            <h1>Home</h1>
            <p>This is Home</p>
        </Background>
    )
}

export default Home