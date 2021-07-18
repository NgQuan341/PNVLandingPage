import axiosClient from './axios'

class CampaignApi {
    getAll = () => {
    const url = `/campaigns`;
    return axiosClient.get(url);
    };
    getOne = (id) => {
        const url = `/campaigns/${id}`;
        return axiosClient.get(url)
    };
    post = (data) =>{
        const url = `/campaigns`;
        return axiosClient.post(url,data)
    }
    putInPost = (data,id) =>{
        const url  = `/campaigns/${id}`;
        return axiosClient.post(url,data)
    };
    put = (data,id) =>{
        const url  = `/campaigns/${id}`;
        return axiosClient.put(url,data)
    };
    delete = (id) =>{
        const url  = `/campaigns/${id}`;
        return axiosClient.delete(url)
    }
    }
    const CampaignAPI = new CampaignApi();
export default CampaignAPI;

