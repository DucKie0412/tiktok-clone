import axios from "axios";

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

export const get = async (apiPath, options = {}) => {
    const response = await request.get(apiPath, options);
    return response.data
}