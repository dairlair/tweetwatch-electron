import axios, { AxiosInstance } from 'axios'
import { strict } from 'assert';

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

    public async signup(email: string, password: string): Promise<boolean|string>
    {
        return this.auth('/signup', email, password);
    }

    public async login(email: string, password: string): Promise<boolean|string>
    {
        return this.auth('/login', email, password);
    }

    private async auth(path: string, email: string, password: string): Promise<boolean|string> {
        return this.httpClient.post(path, {email: email, password: password})
        .then((response) => {
            console.log(response.data)
            return this.isValidAuthResponse(response.data)
        }).catch((err) => {
            console.error("auth error:", err)
            return false
        })
    }

    private isValidAuthResponse(response: any): boolean|string  {
        if ("token" in response) {
            return response.token
        }

        return false
    }
}

export default AuthService;