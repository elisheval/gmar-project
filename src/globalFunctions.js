export function sendRequest(url, method, details) {
    alert('dd')
    let response = fetch(`http://localhost:5005/api/${url}`, {
        method:method,
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(details)
    }).catch(err=>console.log(err));
    return response;
}