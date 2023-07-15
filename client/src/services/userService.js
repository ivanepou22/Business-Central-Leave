import http from './httpServices';

const apiEndpoint = '/users';

function userAppUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export async function getUsers() {
    return http.get(apiEndpoint);
}

export async function getUser(userId) {
    return http.get(userAppUrl(userId));
}

export async function createUser(user) {
    return http.post(apiEndpoint, user);
}

export async function updateUser(userId, user) {
    return http.patch(userAppUrl(userId), user);
}

export async function deleteUser(userId) {
    return http.delete(userAppUrl(userId));
}