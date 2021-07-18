import axiosClient from './axios'

class PartnerApi {
    getAll = () => {
    const url = `/partners`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/partners/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/partners`;
        return axiosClient.post(url,data)
    }
    putInPost = (data,id) =>{
        const url  = `/partners/${id}`;
        return axiosClient.post(url,data)
    };
    put = (data,id) =>{
        const url  = `/partners/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/partners/${id}`;
        return axiosClient.delete(url)
    }
    }
const PartnerAPI = new PartnerApi();
export default PartnerAPI;

