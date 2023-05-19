
const checkIfUserExists = async (authBody) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(authBody)
    }
    const response = await fetch('http://localhost:8000', requestOptions)
    const result = await response.json()
    return result
}

const checkIfUserIsAdmin = async (id) => {
    try {
        const userRole = await fetch('http://localhost:8000/admin/get-role/' + id)
        return userRole.json()
    } catch (error) {
        console.error(error)
    }
}
const apiAuth = {
    checkIfUserExists,
    checkIfUserIsAdmin
}

export default apiAuth