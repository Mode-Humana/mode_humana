import axios from 'axios';

const url = 'http://localhost:2020';

const api = axios.create({
	baseURL: url
})

export default api;