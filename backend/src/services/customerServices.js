import Customer from "../models/Customer.js"
import bcrypt from 'bcrypt'

const findOneCustomer = async (id) => {
    const customer = await Customer.findAll({
        where: {
            id
        },
        include: [Customer.Account]
    })
    return customer
}

const authUser = async (customerToAuth) => {
    try {
        // Use this function in {find one customer}
        const foundUser = await Customer.findOne({
            where: {
                email: customerToAuth.email
            }
        })
        // -------
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
    authUser
}