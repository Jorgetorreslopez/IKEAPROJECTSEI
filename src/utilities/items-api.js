import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function getFavorites() {
    return sendRequest(`${BASE_URL}/favorites`)
}

export function addToFavorites(itemId) {
    return sendRequest(`${BASE_URL}/favorites/${itemId}`, 'POST')
}

export function removeFromFavorites(itemId) {
    return sendRequest(`${BASE_URL}/favorites/${itemId}`, 'DELETE')
}