import { adminServices } from "../services/adminServices.js";

const postNewCustomer = async (req, res) => {
    const newCustomerData = req.body
    // console.log(newCustomerData)
    try {
        const newCustomer = await adminServices.createNewCustomer(newCustomerData)
        res.json(newCustomer)
    } catch (error) {
        console.log(error)
    }
}

const getAllCustomer = async (req, res) => {
    try {
        const customerList = await adminServices.findAllCustomer()
        res.status(200).json(customerList)
    } catch (error) {
        console.error(error)
    }
}

export const adminController = {
    postNewCustomer,
    getAllCustomer
}