import { customerServices } from "../services/customerServices.js"
import HTTP_codes from "../../utils/HTTP_codes.js"

const { correct_codes, client_errors, server_errors } = HTTP_codes

const getCustomerDashboard = async (req, res) => {
    const { email } = req.params
    try {
        const data = await customerServices.findCustomerDashboardInfo(email)
        res.status(correct_codes.OK).json(data)
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.error(error)
    }
}

const getCardsFromCustomer = async (req, res) => {
    const { id } = req.params
    try {
        const cards = await customerServices.findAllCardsFromCustomerId(id)
        res.status(correct_codes.OK).json(cards)
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.error(error)
    }
}

const postNewCard = async (req, res) => {
    const card = req.body
    const { id } = req.params
    try {
        const newCard = await customerServices.createNewCard(card, id)
        if (newCard){
            res.status(correct_codes.CREATED).json(newCard)
            return
        }
        res.status(client_errors.NOT_ACCEPTABLE).json({})
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.error(error)
    }
}

const postNewLoanRequest = async (req, res) => {
    const loanRequest = req.body
    const { id } = req.params
    try {
        const newLoanRequest = await customerServices.createNewLoan(loanRequest, id)
        if (newLoanRequest){
            res.status(correct_codes.CREATED).json(newLoanRequest)
            return
        }
        res.status(correct_codes.NO_CONTENT).json({})
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.error(error)
    }
}

const getLoanRequests = async (req, res) => {
    const { id } = req.params
    try {
        const loanRequestList = await customerServices.findLoanRequestsFromCustomer(id)
        if (loanRequestList){
            res.status(correct_codes.OK).json(loanRequestList)
            return
        }
        res.status(correct_codes.NO_CONTENT).json([])
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.error(error)
    }
}

const postNewMovement = async (req, res) => {
    const { id } = req.params
    const movement = req.body
    try {
        const newMovement = await customerServices.createNewMovement(movement, id)
        if (newMovement){
            res.status(correct_codes.CREATED).json(newMovement)
            return
        }
        res.status(correct_codes.NO_CONTENT).json({})
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.error(error)
    }
}

const getMovementList = async (req, res) => {
    const { id } = req.params
    try {
        const movementList = await customerServices.findMovementsFromCustomerId(id)
        if (movementList != []){
            res.status(correct_codes.OK).json(movementList)
            return
        }
        res.status(correct_codes.NO_CONTENT).json([])
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.error(error)
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
        res.status(client_errors.FORBIDDEN).json(false)
    } catch (error) {
        res.status(server_errors.INTERNAL_ERROR).json({})
        console.log(error)
    }
}

const customerController = {
    getCustomerDashboard,
    getAuthCustomer,
    getCardsFromCustomer,
    postNewCard,
    postNewLoanRequest,
    getLoanRequests,
    postNewMovement,
    getMovementList
}

export default customerController