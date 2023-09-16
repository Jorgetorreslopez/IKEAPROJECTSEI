import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function updateUser(updatedUserData, userId) {
    return sendRequest(`${BASE_URL}/${userId}`, 'PUT', updatedUserData)
}

export function getUserProfile() {
    return sendRequest(`${BASE_URL}/profile`);
}