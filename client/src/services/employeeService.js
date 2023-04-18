import http from './httpServices';

const apiEndpoint = '/employees';

function employeeUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export async function getEmployees() {
    return http.get(apiEndpoint);
}

export async function getEmployee(employeeId) {
    return http.get(employeeUrl(employeeId));
}