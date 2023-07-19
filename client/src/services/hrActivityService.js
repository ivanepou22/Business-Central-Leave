import http from './httpServices';

const apiEndpoint = '/hr-activities';

export async function getHrActivity() {
    return http.get(apiEndpoint);
}