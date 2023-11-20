import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: "http://notes.evcorp.ru/api"
})

export default instance;