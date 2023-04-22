import tableManager from '../database/tableManager.js'

const {tables} = tableManager

const findOneCustomer = async (id) => {
    await tables.customer.findAll()
}

const createNewCustomer = async (customerData) => {
    await tables.customer.create({
        first_name: 'Daniel',
        last_name: 'Gonzalez',
        birthdate: '2003-09-11',
        password: '1234',
        email: 'danielgonzalez@gmail.com',
        dni: '12345678A',
        phone: '609342312',
        postal_code: '23093',
        address: 'calle tupadre'
    })
}

export const customerServices = {
    findOneCustomer,
    createNewCustomer
}