// import config from 'config'
import axios from "axios";

const path: string = "https://api.unsplash.com"

export const getAll = async () => {
    await axios.get(path + "/photos", {
        headers: {
            Authorization: `Client-ID AZNucs3TQ2E0GAIo1czDhDNcYCH8zyeKtdBwv2K-jbQ`
        }
    }).then(response => {
        return response
    })
        .catch(error => {
            return error
        })
}