import Card from "../../models/Card.js"
import Customer from "../../models/Customer.js"
import bcrypt from 'bcrypt'
import Loan from "../../models/Loan.js"
import LoanRequest from "../../models/LoanRequest.js"
import Movement from "../../models/Movement.js"
import Account from "../../models/Account.js"

const findCustomerDashboardInfo = async (email) => {
    try {
        const customer = await Customer.findOne({
            where: {
                email: email
            },
            include: [{
                model: Account,
                include: [
                    { model: Card },
                    { model: LoanRequest },
                    { model: Loan },
                    { model: Movement },
                ]
            }]
        })
        if (customer){
            return customer
        }
        return 0
    } catch (error) {
        throw new Error (error)
    }
}

const findOneCardFromCustomerId = async (id) => {
    try {
        const card = await Card.findOne({
            where: {
                accountId: id
            }
        })
        if (card){
            return card
        }
        return 0
    } catch (error) {
        throw new Error (error)
    }
}

const findAllCardsFromCustomerId = async (id) => {
    try {
        const cardList = await Card.findAll({
            where: {
                accountId: id
            }
        })
        if (cardList){
            return cardList
        }
        return []
    } catch (error) {
        
    }
}

const createNewCard = async (card, id) => {
    try {
        const newCard = await Card.create({
            holder_name: card?.holder_name,
            number: card?.number,
            type: card?.type,
            cvv: card?.cvv,
            date_expiration: card?.date_expiration,
            accountId: id,
        })
        return newCard
    } catch (error) {
        throw new Error (error)
    }
}

const createNewLoanRequest = async (loanRequest, id) => {
    try {
        const newLoanRequest = await LoanRequest.create({
            total: loanRequest?.total,
            description: loanRequest?.description,
            status: 0,
            accountId: id,
        })
        return newLoanRequest
    } catch (error) {
        throw new Error (error)
    }
}

const findLoanRequestsFromCustomer = async (id) => {
    try {
        const loanRequests = LoanRequest.findAll({
            where: {
                accountId: id
            },
        })
        if (loanRequests){
            return loanRequests
        }
        return 0
    } catch (error) {
        throw new Error (error)
    }

}

const createNewMovement = async (movement, id) => {
    try {
        const newMovement = await Movement.create({
            quantity: movement?.quantity,
            description: movement?.description,
            type: movement?.type,
            date: movement?.date,
            cardId: 0,
            accountId: id
        })
        return newMovement
    } catch (error) {
        throw new Error (error)
    }
}

const findMovementsFromCustomerId = async (id) => {
    try {
        const movementList = Movement.findAll({
            where: {
                accountId: id
            }
        })
        if (movementList){
            return movementList
        }
        return []
    } catch (error) {
        throw new Error (error)
    }
}

const authUser = async (customerToAuth) => {
    try {
        const foundUser = await Customer.findOne({
            where: {
                email: customerToAuth.email
            }
        })
        if (foundUser){
            const password_valid = await bcrypt.compare(customerToAuth.password, foundUser.password)
            if (password_valid){
                return foundUser
            }
        }
        return false
    } catch (error) {
        throw new Error (error)
    }
}

export const customerServices = {
    findCustomerDashboardInfo,
    authUser,
    findOneCardFromCustomerId,
    findAllCardsFromCustomerId,
    createNewCard,
    createNewLoanRequest,
    findLoanRequestsFromCustomer,
    createNewMovement,
    findMovementsFromCustomerId
}