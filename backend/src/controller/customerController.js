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
        await customerServices.createNewCard(card, id)
        res.status(201).json('Created')
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
    getCustomerInfo,
    getAuthCustomer,
    getCardsFromCustomer,
    postNewCard
}

export default customerController