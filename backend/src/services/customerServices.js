import Customer from "../models/Customer.js"
import User from "../models/User.js"
import Account from "../models/Account.js"

const findOneCustomer = async (id) => {
    const customer = await Customer.findAll({
        where: {
            id
        },
        include: [{
            association: Customer.User,
            include: [User.Account]
        }]
    })
    return customer
}

const createNewCustomer = async (customerData) => {
    try {
        await Customer.create({
            first_name: customerData?.first_name,
            last_name: customerData?.last_name,
            birthdate: customerData?.birthdate,
            password: customerData?.password,
            email: customerData?.email,
            dni: customerData?.dni,
            phone: customerData?.phone,
            postal_code: customerData?.postal_code,
            address: customerData?.address,
            user: {
                role: customerData?.user?.role,
                account: {
                    money: customerData?.user?.account?.money,
                    iban: customerData?.user?.account?.iban
                }
            }
        }, {
            include: [{
                association: Customer.User,
                include: [User.Account]
            }]
        })
    } catch (error) {
        throw new Error (error)
    }
}

export const customerServices = {
    findOneCustomer,
    createNewCustomer
}