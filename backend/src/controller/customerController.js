import { customerServices } from "../services/customerServices.js"

const getCustomerInfo = async (id) => {
    try {
        const data = await customerServices.findOneCustomer(id)

        return data
    } catch (error) {
        console.error('[GetCustomerInfo]: Error getting customer Info\n', error)
    }
}

const postNewCustomer = async (customerData) => {
    try {
        await customerServices.createNewCustomer(customerData)
        
    } catch (error) {
        console.error(error)
    }
}

const customerController = {
    getCustomerInfo,
    postNewCustomer
}

export default customerController