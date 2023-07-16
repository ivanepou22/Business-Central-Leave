import http from './httpServices';

const apiEndpoint = '/leave-applications';

function leaveAppUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export async function getLeaveApplications() {
    return http.get(apiEndpoint);
}

export async function getLeaveApplication(applicationId) {
    return http.get(leaveAppUrl(applicationId));
}

export async function createLeaveApplication(leaveApplication) {
    console.log(leaveApplication)
    return http.post(apiEndpoint, leaveApplication);
}

export async function updateLeaveApplication(leaveAppId,leaveApplication) {
        return http.patch(leaveAppUrl(leaveAppId), leaveApplication);
}

export async function deleteLeaveApplication(leaveApplicationId) {
    return http.delete(leaveAppUrl(leaveApplicationId));
}