
const BASE_URL = 'http://localhost:8000'

const getAllCustomer = async () => {
    try {
        const data = await fetch(BASE_URL + '/admin/customers')
        return data.json()
    } catch (error) {
        console.error(error)
    }
}

const apiAdmin = {
    getAllCustomer
}

export default apiAdmin