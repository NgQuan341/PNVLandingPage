import axiosClient from './axios'

class SharingApi {
    getAll = () => {
    const url = `/sharing`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/sharing/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/sharing`;
        return axiosClient.post(url,data)
    }
    putInPost = (data,id) =>{
        const url  = `/sharing/${id}`;
        return axiosClient.post(url,data)
    };
    put = (data,id) =>{
        const url  = `/sharing/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/sharing/${id}`;
        return axiosClient.delete(url)
    }
    }
const SharingAPI = new SharingApi();
export default SharingAPI;

