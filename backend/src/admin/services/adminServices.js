import Account from "../../models/Account.js"
import Card from "../../models/Card.js"
import Customer from "../../models/Customer.js"
import bcrypt from 'bcrypt'
import Loan from "../../models/Loan.js"

const createNewCustomer = async (customerData) => {

    const salt = await bcrypt.genSalt(10)

    try {
        await Customer.create({
            first_name: customerData?.first_name,
            last_name: customerData?.last_name,
            birthdate: customerData?.birthdate,
            password: await bcrypt.hash(customerData?.password, salt),
            email: customerData?.email,
            dni: customerData?.dni,
            phone: customerData?.phone,
            postal_code: customerData?.postal_code,
            address: customerData?.address,
            account: {
                role: customerData?.account?.role,
                money: customerData?.account?.money,
                iban: customerData?.account?.iban
            }
        }, {
            include: [Customer.Account]
        })
    } catch (error) {
        throw new Error (error)
    }
}

const findAllCustomer = async () => {
    try {
        const customerList = Customer.findAll({include: Customer.Account})
        return customerList
    } catch (error) {
        throw new Error (error)
    }
}

const findUserRoleFromAccountId = async (id) => {
    try {
        const account = await Account.findOne({
            where: {
                id
            }
        })
        return account.role
    } catch (error) {
        throw new Error (error)
    }
}

const updateCardRequest = async (id, status) => {
    try {
        const card = await Card.update({status: status},{
            where: { id }
        })
        return card
    } catch (error) {
        throw new Error (error)
    }
}

const getLoanRequestsList = async () => {
    try {
        const loanList = await Loan.findAll({
            where: { status: 'pending'}
        })
        return loanList
    } catch (error) {
        throw new Error (error)
    }
}

const updateLoan = async (id, status) => {
    try {
        const loanUpdated = await Loan.update({status: status}, {
            where: { id }
        })
        return loanUpdated
    } catch (error) {
        throw new Error (error)
    }
}

export const adminServices = {
    createNewCustomer,
    findAllCustomer,
    findUserRoleFromAccountId,
    updateCardRequest,
    getLoanRequestsList,
    updateLoan
}