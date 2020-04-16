import {paramStringify} from '../paramsStringify';

export const apiConnection = async (endpoint = '', data = null) => {
    const url = data
        ? `/${endpoint}?${paramStringify(data)}`
        : `/${endpoint}`;

    return await fetch(url, {
        method: 'GET',
        headers: {
            'X-Auth-Token': process.env.REACT_APP_API_KEY || '',
        },
    });
};

