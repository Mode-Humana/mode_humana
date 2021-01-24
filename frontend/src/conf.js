import axios from 'axios';

// const url = 'http://localhost:2020';
const url = 'https://mode-humana.herokuapp.com'

const api = axios.create({
	baseURL: url
})

console.log(url);

export default api;