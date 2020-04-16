import {paramStringify} from '../paramsStringify';

const apiKey = process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : '';

export const apiConnection = async (endpoint = '', data = null) => {
    const url = data
        ? `/${endpoint}?${paramStringify(data)}`
        : `/${endpoint}`;

    return await fetch(url, {
        method: 'GET',
        headers: {
            'X-Auth-Token': apiKey,
        },
    });
};

