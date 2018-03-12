import api from './api';

const AuthService = {
    registerUser: (data) => {
        return api.post('auth/register', {
            username: data.username,
            name: data.name,
            email: data.email,
            password: data.password
        });
    },    
    loginUser: (data) => {
        return api.post('auth/login', {}, {
            headers: {
                'Authorization': `${data.username}:${data.password}`
            }
        });
    },
    logoutUser: (data) =>{
        if (AuthService.isAuthenticated()) {
            localStorage.removeItem('access_token');
        }
    },    
    setTokens: (tokenObj) => {
        if (tokenObj.access_token) {
            localStorage.setItem('access_token', tokenObj.access_token);
        }
    },    
    isAuthenticated: () => {
        const token = localStorage.getItem('access_token');
        return !!token;
    }
};

export default AuthService;
