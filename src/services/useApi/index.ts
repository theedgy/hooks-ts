import {useEffect, useState} from 'react';
import {apiConnection} from '../apiConnection';

const defaultStatus = 'idle';

export const useApi = (endpoint: string, data = null) => {
    const [response, setResponse] = useState<any>(null);
    const [status, setStatus] = useState<string>(defaultStatus);

    useEffect(() => {
        setStatus('loading');
        apiConnection(endpoint, data)
            .then(r => r.json())
            .then(r => {
                setStatus(defaultStatus);
                setResponse(r);
            })
            .catch(error => setStatus(`Error has been occurred: ${error}`));
    }, [
        endpoint, data,
    ]);

    return {response, status};
};
