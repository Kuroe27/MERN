import axios from 'axios'

const API_URL = 'https://mern-app-60nb.onrender.com/api/users'

const register = async (userData) => {
    const res = await axios.post(API_URL, userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data
}
const logout = () => {
    localStorage.removeItem('user')
}

const login = async (userData) => {
    const res = await axios.post(API_URL + '/login', userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data
}
const authService = {
    register,
    logout,
    login
}



export default authService