
const baseUrl = "http://localhost:5000/";

export async function postData(wineType) {
    const response = await fetch(baseUrl + 'api/winepairing/searchfood', {
        method: 'POST', //
        mode: 'cors', //
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // 
        referrerPolicy: 'no-referrer', // 
        body: JSON.stringify(wineType) // 
    });
    return response.json(); // 
}


export async function postFood(winePair) {
    const response = await fetch(baseUrl + 'api/winepairing/searchwine', {
        method: 'POST', //
        mode: 'cors', //
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // 
        referrerPolicy: 'no-referrer', // 
        body: JSON.stringify(winePair) // 
    });
    return response.json(); // 
}