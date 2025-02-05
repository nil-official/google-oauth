import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

export default axios;