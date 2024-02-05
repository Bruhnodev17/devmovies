import { getImages } from "../../utils/getImages"
import { Container } from "./styles"
// eslint-disable-next-line react/prop-types
function Card({ item }) {
    return (
        <>
            <Container>
                <img src={getImages(item.poster_path)} alt="" />
                <h3>{item.title}</h3>
            </Container>
        </>
    )
}

export default Card
