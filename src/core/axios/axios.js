import axios from 'axios';
import { API_SERVER_URL } from '../constans/default-consts';

export const APIServer = axios.create({
    baseURL: API_SERVER_URL
});