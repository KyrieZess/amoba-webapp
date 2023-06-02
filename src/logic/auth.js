import { ClientApiService, RequestMethod } from './client-api-service.js'

const LOGIN_PATH = 'auth/login';
const LOGIN_STORED = 'amoba_user_token';

export const AuthLogic = {
    async Login(username, password, validTo) {
        const response = await ClientApiService.sendRequestBasicAuth(
            RequestMethod.POST, LOGIN_PATH, null, username, password);

        const result = await response.json();

        if (response.status == 200) {
            result.ValidTo = new Date(Date.now() + 2 * 60000);
            localStorage.setItem(LOGIN_STORED, JSON.stringify(result));

            return true;
        }

        return false;
    },
    TokenIsValid() {
        const tokenString = localStorage.getItem(LOGIN_STORED);

        if (tokenString == null) { return false; }

        const token = JSON.parse(tokenString);

        //TODO: moment bevezetése
        if (token.ValidTo < Date.now()) {
            localStorage.removeItem(LOGIN_STORED);
            return false;
        }

        return true;
    }
}