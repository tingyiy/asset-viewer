import axios from 'axios';

const apiKey = "---";
const engine = "008587737443443656257:cxb2mx5rfv4"

const assetService = store => next => action => {
    next(action)

    const instance = axios.create({
        baseURL: 'https://www.googleapis.com',
    });

    instance.defaults.headers.common = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'
    };

    switch (action.type) {
        case 'GET_STATUS':
            instance
                .get('/customsearch/v1', {
                    params: {
                        key: apiKey,
                        cx: engine,
                        q: 'test'
                    }
                })
                .then(res => {
                    const data = res.data
                    next({
                        type: 'GET_STATUS_RECEIVED',
                        data
                    })
                })
            break
        case 'START_QUERY':
            instance
                .get('/customsearch/v1', {
                    params: {
                        key: apiKey,
                        cx: engine,
                        q: 'test'
                    }
                })
                .then(res => {
                    const data = res.data
                    next({
                        type: 'QUERY_RECEIVED',
                        data
                    })
                })
        default:
            break
    }

};

export default assetService
