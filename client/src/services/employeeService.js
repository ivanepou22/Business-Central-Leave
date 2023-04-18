import http from './httpServices';

const apiEndpoint = '/employees';

function employeeUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getEmployees() {
    return http.get(apiEndpoint);
}

export function getEmployee(movieId) {
    return http.get(employeeUrl(movieId));
}