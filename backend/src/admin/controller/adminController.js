import { adminServices } from "../services/adminServices.js";
import HTTP_codes from "../../utils/HTTP_codes.js";

const { correct_codes, server_errors } = HTTP_codes


const postNewCustomer = async (req, res) => {
    const newCustomerData = req.body
    try {
        const newCustomer = await adminServices.createNewCustomer(newCustomerData)
        res.json(newCustomer)
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.log(error)
    }
}

const putCustomer = async (req, res) => {
    const { id } = req.params
    const newCustomerData = req.body

    try {
        const newCustomer = await adminServices.updateCustomer(newCustomerData, id)
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

const getUserRoleFromEmail = async (req, res) => {
    const { email } = req.params
    try {
        const customerRole = await adminServices.findUserRoleFromCustomerEmail(email)
        res.status(correct_codes.OK).json(customerRole)
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.error(error)
    }
}

const getCardRequestsList = async (req, res) => {
    try {
        const cardList = await adminServices.getCardRequestsList()
        res.status(correct_codes.OK).json(cardList)
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

const getLoanRequestsList = async (req, res) => {
    try {
        const loanList = await adminServices.getLoanRequestsList()
        res.status(correct_codes.OK).json(loanList)
    } catch (error) {
        console.error(error)
    }
}

const updateLoan = async (req, res) => {
    const { id } = req.params
    const { status } = req.body
    try {
        const updatedLoan = await adminServices.updateLoan(id, status)
        res.status(correct_codes.OK).json(updatedLoan)
    } catch (error) {
        console.error(error)
    }
}

export const adminController = {
    postNewCustomer,
    getAllCustomer,
    getUserRoleFromEmail,
    getCardRequestsList,
    updateCardRequest,
    getLoanRequestsList,
    updateLoan,
    putCustomer
}