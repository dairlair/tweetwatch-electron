import axios, { AxiosInstance } from 'axios'

const webApiUrl = "http://localhost:1308";

class AuthService {
    private httpClient: AxiosInstance
    constructor() {
        this.httpClient = axios.create({
            baseURL: webApiUrl,
            timeout: 1000,
            headers: {'Content-Type': 'application/json'}
        });
    }

    signup(email: string, password: string)
    {
        this.httpClient.post('/signup', {email: email, password: password})
        .then((response) => {
            console.log("in axios ", response.data)
        }).catch((err) => {
            console.log("in axios ", err)
        })
    }
}

export default AuthService;