import jwtDecode from 'jwt-decode';
import http from './httpServices';
// import config from '../config.json';

// const apiEndpoint = config.apiUrl + '/auth';
const apiEndpoint = '/users/login';
const tokenKey = 'token';

http.setJwt(getJwt());

export async function login(username, password) {
    const { data: jwt } = await http.post(apiEndpoint, {
        username,
        password
    });
    localStorage.setItem(tokenKey, jwt.token);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem(tokenKey);
        const user = jwtDecode(token);
        return user;
    }
    catch (ex) {
        console.log(ex)
    }
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default { login, loginWithJwt, logout, getCurrentUser, getJwt };