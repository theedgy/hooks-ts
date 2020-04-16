import {paramStringify} from "../paramsStringify";

// We have to use any for Promise response
// interface as we didn't define specific
// api responses but only our data of interests
export const apiConnection = async (endpoint = "", data = null): Promise<any> => {
    const url = data
        ? `https://api.football-data.org/v2/${endpoint}?${paramStringify(data)}`
        : `https://api.football-data.org/v2/${endpoint}`;

    return await fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": process.env.REACT_APP_API_KEY || ""
        }
    })
        .then(r => r.json())
        .catch(error => {
            throw Error(`${error}`)
        });
};
