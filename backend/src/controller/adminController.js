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

export const adminController = {
    postNewCustomer
}