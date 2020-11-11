// configuração da api

import { create } from 'apisauce';

const api = create({
    baseURL: 'http://localhost:3000',

});

export default api;

// requisição rest
