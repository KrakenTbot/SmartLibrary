import $api from "../requests/config";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/token/', {email, password})
    }

    static async registration(email, password) {
        return $api.post('/registration', {email, password})
    }

    static async logout() {
        return $api.post('/logout')
    }

}

