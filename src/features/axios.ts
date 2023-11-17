import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: "http://134.0.118.64/api"
})

export default instance;