import { customerServices } from "../services/customerServices.js"

const getCustomerInfo = async (req, res) => {
    const { id } = req.params
    try {
        const data = await customerServices.findOneCustomer(id)
        res.status(200).json(data)
    } catch (error) {
        console.error('[GetCustomerInfo]: Error getting customer Info')
    }
}

const getAuthCustomer = async (req, res) => {
    const customerRequestedToAuthInfo = req.body
    console.log(customerRequestedToAuthInfo)

    try {
        const isAuthorized = await customerServices.authUser(customerRequestedToAuthInfo)
        if (isAuthorized) {
            res.status(200).json(true)
            return
        }
        res.status(401).json(false)
    } catch (error) {
        console.log(error)
        res.status(500).json("InternalError")
    }
}

const customerController = {
    getCustomerInfo,
    getAuthCustomer
}

export default customerController