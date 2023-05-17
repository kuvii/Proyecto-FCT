
const BASE_URL = 'http://localhost:8000'

const getCustomerInfo = async (email) => {
    try {
        const data = await fetch(BASE_URL + '/my/dashboard/' + email)
        if (data){
            const customerInfo = await data.json()
            return customerInfo
        }
        return null
    } catch (error) {
        console.error(error)
    }
}

const getCustomerCards = async (id) => {
    try {
        const data = await fetch(BASE_URL + '/my/cards' + id)
        if (data) {
            const customerInfoCards = await data.json()
            console.log(customerInfoCards)
            return customerInfoCards
        }
        return []
    } catch (error) {
        console.error(error)
    }
}

const apiCustomer = {
    getCustomerInfo,
    getCustomerCards
}

export default apiCustomer