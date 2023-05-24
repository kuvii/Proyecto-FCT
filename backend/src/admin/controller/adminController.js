import { adminServices } from "../services/adminServices.js";
import HTTP_codes from "../../utils/HTTP_codes.js";

const { correct_codes, server_errors } = HTTP_codes


const postNewCustomer = async (req, res) => {
    const newCustomerData = req.body
    // console.log(newCustomerData)
    try {
        const newCustomer = await adminServices.createNewCustomer(newCustomerData)
        res.json(newCustomer)
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.log(error)
    }
}

const getAllCustomer = async (req, res) => {
    try {
        const customerList = await adminServices.findAllCustomer()
        res.status(correct_codes.OK).json(customerList)
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json([])
        console.error(error)
    }
}

const getUserRoleFromId = async (req, res) => {
    const { id } = req.params
    try {
        const customerRole = await adminServices.findUserRoleFromAccountId(id)
        res.status(correct_codes.OK).json(customerRole)
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json([])
        console.error(error)
    }
}

const updateCardRequest = async (req, res) => {
    const { id } = req.params
    const { status } = req.body
    try {
        const requestedCard = await adminServices.updateCardRequest(id, status)
        res.status(correct_codes.OK).json(requestedCard)
    } catch (error) {
        console.error(error)
    }
}

export const adminController = {
    postNewCustomer,
    getAllCustomer,
    getUserRoleFromId,
    updateCardRequest
}