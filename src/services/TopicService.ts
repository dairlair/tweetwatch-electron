import axios, { AxiosInstance } from 'axios'

const webApiUrl = "/api";

class TopicService {

    private httpClient: AxiosInstance

    public constructor() {
        this.httpClient = axios.create({
            baseURL: webApiUrl,
            timeout: 1000,
            headers: {'Content-Type': 'application/json'}
        });
    }

    get = async (jwtToken: string) => {
        const data = await this.httpClient.get('/topics', {headers: {
            // @TODO Move this logic to some base class / method
            'Authorization': jwtToken
        }})
        // @TODO Add common error handling
        return data.data
    }
}

export default TopicService