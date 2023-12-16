// Service Class to reqtest data from api

import axios from 'axios';

const baseURL = 'https://sample.com/api'; 

const request = async (endpoint) => {
    try {
        const response = await axios.get(`${baseURL}${endpoint}`);
        // enhance func to capture http status codes 
        // Todo update telemetry - request function must be one source of truth for all network calls
        return response.data;
    } catch(error) {
        // enhance func to send custom error codes
        // Todo update telemetry - send api failures to analytics 
        throw error;
    }
}

export { request };