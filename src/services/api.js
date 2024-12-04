import axios from 'axios'

const api = axios.create({

    baseURL: 'https://api-dashboard-q4h8.onrender.com'
    //baseURL: 'http://localhost:8081'

})

export default api
