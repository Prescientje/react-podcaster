import api from './api';

export function registerUser(data) {
    return api.post('auth/register', {
        username: data.username,
        name: data.name,
        email: data.email,
        password: data.password
    });
}

export function loginUser(data) {
    return api.post('auth/login', {}, {
        headers: {
            'Authorization': `${data.username}:${data.password}`
        }
    });
}