import axios, { AxiosInstance } from 'axios'

const webApiUrl = "/api";

class AuthService {
    private httpClient: AxiosInstance
    constructor() {
        this.httpClient = axios.create({
            baseURL: webApiUrl,
            timeout: 1000,
            headers: {'Content-Type': 'application/json'}
        });
    }

    public async signup(email: string, password: string): Promise<boolean>
    {
        return this.httpClient.post('/signup', {email: email, password: password})
        .then((response) => {
            console.info("signup success", response)
            return this.isValidSignupResponse(response.data)
        }).catch((err) => {
            console.error("signup error:", err)
            return false
        })
    }

    public async login(token: string): Promise<boolean>
    {
        return this.httpClient.post('/login', {}, {
            headers: {
                "Authorization": "Basic " + token  
            }
        })
        .then((response) => {
            console.log(response.data)
            return this.isValidSignupResponse(response.data)
        }).catch((err) => {
            console.error("login error:", err)
            return false
        })
    }

    private isValidSignupResponse(response: any): boolean  {
        return ("id" in response) && (response.id > 1)
    }

    private isValidLoginResponse(response: any): boolean  {
        return ("id" in response) && (response.id > 1)
    }
}

export default AuthService;