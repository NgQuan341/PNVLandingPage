import axiosClient from './axios'

class ActivitiesApi {
    getAll = () => {
    const url = `/activities`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/activities/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/activities`;
        return axiosClient.post(url,data)
    }
    putInPost = (data,id) =>{
        const url  = `/activities/${id}`;
        return axiosClient.post(url,data)
    };
    put = (data,id) =>{
        const url  = `/activities/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/activities/${id}`;
        return axiosClient.delete(url)
    }
    }
const ActivitiesAPI = new ActivitiesApi();
export default ActivitiesAPI;

