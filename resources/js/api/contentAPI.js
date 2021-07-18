import axiosClient from './axios'

class ContentApi {
    getAll = () => {
    const url = `/content`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/content/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/content`;
        return axiosClient.post(url,data)
    }
    putInPost = (data,id) =>{
        const url  = `/content/${id}`;
        return axiosClient.post(url,data)
    };
    put = (data,id) =>{
        const url  = `/content/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/content/${id}`;
        return axiosClient.delete(url)
    }
    }
const ContentAPI = new ContentApi();
export default ContentAPI;

