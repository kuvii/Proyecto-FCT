import { customerServices } from "../services/customerServices.js"

const getCustomerInfo = async (id) => {
    try {
        const data = await customerServices.findOneCustomer(id)

        return data
    } catch (error) {
        console.error('[GetCustomerInfo]: Error getting customer Info\n', error)
    }
}

const postNewCustomer = async (req, res) => {
    const newCustomerData = req.body
    // console.log(newCustomerData)
    try {
        const newCustomer = await customerServices.createNewCustomer(newCustomerData)
        res.json(newCustomer)
    } catch (error) {
        console.log(error)
    }
}

const customerController = {
    getCustomerInfo,
    postNewCustomer
}

export default customerController