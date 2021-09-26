import axios from 'axios';

const NETWORK_API_BASE_URL = "https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks";

class NetworkService {

    getNetworks(){
        return axios.get(NETWORK_API_BASE_URL);
    }

    createNetwork(network){
        return axios.post(NETWORK_API_BASE_URL, network);
    }

    getNetworkById(networkId){
        return axios.get(NETWORK_API_BASE_URL + '/' + networkId);
    }

    updateNetwork(network, networkId){
        return axios.put(NETWORK_API_BASE_URL + '/' + networkId, network);
    }

    deleteNetwork(networkId){
        return axios.delete(NETWORK_API_BASE_URL + '/' + networkId);
    }
}

export default new NetworkService()