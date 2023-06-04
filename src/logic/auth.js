import moment from 'moment';
import { ClientApiService, RequestMethod } from './client-api-service.js'

const LOGIN_PATH = 'auth/login';
const LOGIN_STORED = 'amoba_user_token';

export const AuthLogic = {
    async Login(username, password, validTo) {
        // send the request
        const response = await ClientApiService.sendRequestBasicAuth(
            RequestMethod.POST, LOGIN_PATH, null, username, password);

        // read the response as json
        const result = await response.json();

        // if the request was success
        if (response.status == 200) {
            // add to token the valid to date
            result.ValidTo = validTo;
            // store the token in localstorage as string
            localStorage.setItem(LOGIN_STORED, JSON.stringify(result));

            return true;
        }

        return false;
    },
    // check the token is valid
    TokenIsValid() {
        // get the token from localstorage
        const tokenString = localStorage.getItem(LOGIN_STORED);
        // check if it is not null
        if (tokenString == null) { return false; }
        // token read as json
        const token = JSON.parse(tokenString);
        // check the difference between the valid to date and now 
        const diff = moment(token.ValidTo).diff(moment(), "seconds");
        // if the diff is greater than 0 
        if (diff <= 0) {
            // remove the invalid token from the localstorage
            localStorage.removeItem(LOGIN_STORED);
            return false;
        }

        return true;
    },
    // logout
    Logout() {
        // remove the token from localstorage
        localStorage.removeItem(LOGIN_STORED);
    }
}