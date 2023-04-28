import Card from "../models/Card.js"
import Customer from "../models/Customer.js"
import bcrypt from 'bcrypt'
import Loan from "../models/Loan.js"
import LoanRequest from "../models/LoanRequest.js"

const findOneCustomer = async (id) => {
    const customer = await Customer.findOne({
        where: {
            id
        },
        include: [Customer.Account]
    })
    return customer
}

const findCardsFromCustomerId = async (id) => {
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

const createNewCard = async (card, id) => {
    try {
        await Card.create({
            holder_name: card?.holder_name,
            number: card?.number,
            type: card?.type,
            cvv: card?.cvv,
            date_expiration: card?.date_expiration,
            accountId: id,
        })
    } catch (error) {
        throw new Error (error)
    }
}

const createNewLoanRequest = async (loanRequest, id) => {
    try {
        await LoanRequest.create({
            total: loanRequest?.total,
            description: loanRequest?.description,
            status: 0,
            accountId: id,
        })
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
                return true
            }
        }
        return false
    } catch (error) {
        throw new Error (error)
    }
}

export const customerServices = {
    findOneCustomer,
    authUser,
    findCardsFromCustomerId,
    createNewCard,
    createNewLoanRequest,
    findLoanRequestsFromCustomer
}