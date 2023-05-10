
const isAuthorized = async (authBody) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(authBody)
    }
    const response = await fetch('http://localhost:8000', requestOptions)
    const result = await response.json()
    return result
}

export default isAuthorized