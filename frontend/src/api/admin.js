
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

const updateLoanRequestStatus = async (id, status) => {
    try {
        const result = await fetch(BASE_URL + '/admin/loan-requests/loan/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status})
        })
        return result.json()
    } catch (error) {
        console.error(error)
    }
}

const getCardsList = async () => {
    try {
        const data = await fetch(BASE_URL + '/admin/cards/requests')
        return data.json()
    } catch (error) {
        console.error(error)
    }
}

const updateCardStatus = async (id, status) => {
    try {
        await fetch(BASE_URL + '/admin/cards/requests/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status})
        })
        
    } catch (error) {
        console.error(error)
    }
}

const createNewUser = async (customerInfo) => {
    try {
        await fetch(`${BASE_URL}/admin/new-customer`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({customerInfo})
        })
    } catch (error) {
        console.error(error)
    }
}

const apiAdmin = {
    getAllCustomer,
    getLoanList,
    getCardsList,
    updateCardStatus,
    updateLoanRequestStatus,
    createNewUser
}

export default apiAdmin