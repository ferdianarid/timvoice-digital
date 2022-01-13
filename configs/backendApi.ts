import axios from "axios";

require("dotenv/config")

const backendApi = axios.create({
       baseURL: process.env.NEXT_PUBLIC_BASE_API,
})

export const backendPost = (url: string, data: any, token: string) => {
       return backendApi.post(url, data, {
              headers: {
                     "Authorization": "Bearer " + token,
                     "Content-Type": "multipart/form-data"
              },
       })
}

export default backendApi