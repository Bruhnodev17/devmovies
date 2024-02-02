import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "cfb038a37b0f2b1ee801412383074200",
        language: "pt-BR",
        page: 1
    }
})

export default api