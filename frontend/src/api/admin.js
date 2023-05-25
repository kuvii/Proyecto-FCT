
const BASE_URL = 'http://localhost:8000'

const getAllCustomer = async () => {
    try {
        const data = await fetch(BASE_URL + '/admin/customers')
        return data.json()
    } catch (error) {
        console.error(error)
    }
}

const getLoanList = async () => {
    try {
        const data = await fetch(BASE_URL + '/admin/loan-requests')
        return data.json()
    } catch (error) {
        console.error(error)
    }
}

const apiAdmin = {
    getAllCustomer,
    getLoanList
}

export default apiAdmin