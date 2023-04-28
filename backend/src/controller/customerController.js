import { customerServices } from "../services/customerServices.js"

const getCustomerDashboard = async (req, res) => {
    const { id } = req.params
    try {
        const data = await customerServices.findCustomerDashboardInfo(id)
        res.status(200).json(data)
    } catch (error) {
        console.error('[getCustomerDashboard]: Error getting customer Info')
    }
}

const getCardsFromCustomer = async (req, res) => {
    const { id } = req.params
    try {
        const cards = await customerServices.findCardsFromCustomerId(id)
        res.status(200).json(cards)
    } catch (error) {
        console.error(error)
    }
}

const postNewCard = async (req, res) => {
    const card = req.body
    const { id } = req.params
    try {
        const newCard = await customerServices.createNewCard(card, id)
        if (newCard){
            res.status(201).json(newCard)
            return
        }
        res.status(422).json({})
    } catch (error) {
        console.error(error)
    }
}

const postNewLoanRequest = async (req, res) => {
    const loanRequest = req.body
    const { id } = req.params
    try {
        const newLoanRequest = await customerServices.createNewLoanRequest(loanRequest, id)
        if (newLoanRequest){
            res.status(200).json(newLoanRequest)
            return
        }
        res.status(422).json({})
    } catch (error) {
        console.error(error)
    }
}

const getLoanRequests = async (req, res) => {
    const { id } = req.params
    try {
        const loanRequestList = await customerServices.findLoanRequestsFromCustomer(id)
        res.status(200).json(loanRequestList)
    } catch (error) {
        console.error(error)
    }
}

const postNewMovement = async (req, res) => {
    const { id } = req.params
    const movement = req.body
    try {
        await customerServices.createNewMovement(movement, id)
    } catch (error) {
        console.error(error)
    }
}

const getMovementList = async (req, res) => {
    const { id } = req.params
    try {
        const movementList = await customerServices.findMovementsFromCustomerId(id)
        if (movementList != []){
            res.status(200).json(movementList)
        }
    } catch (error) {
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
        res.status(401).json(false)
    } catch (error) {
        console.log(error)
        res.status(500).json("InternalError")
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