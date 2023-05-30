
const BASE_URL = 'http://localhost:8000'

const getCustomerInfo = async (email) => {
    try {
        const data = await fetch(BASE_URL + '/my/dashboard/' + email)
        if (data){
            const customerInfo = await data.json()
            return customerInfo
        }
        return null
    } catch (error) {
        console.error(error)
    }
}

const getCustomerCards = async (id) => {
    try {
        const data = await fetch(BASE_URL + '/my/cards/' + id)
        if (data) {
            const customerInfoCards = await data.json()
            return customerInfoCards
        }
        return []
    } catch (error) {
        console.error(error)
    }
}

const getCustomerMovements = async (id) => {
    try {
        const data = await fetch(BASE_URL + '/my/movements/' + id)
        if (data) {
            const customerInfoMovements = await data.json()
            return customerInfoMovements
        }
        return []
    } catch (error) {
        console.error(error)
    }
}

const createNewMovement = async (customerId, movementInfo) => {
    try {
        await fetch(BASE_URL + '/my/movements/new-movement/' + customerId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { movementInfo }
        })
        updateMoney(movementInfo?.quantity, movementInfo?.type, customerId)
    } catch (error) {
        console.error(error)
    }
}

const requestNewCard = async (cardInfo, customerId) => {
    try {
        const data = await fetch(`${BASE_URL}/my/cards/new-card/${customerId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { cardInfo }
        })
        return data
    } catch (error) {
        console.error(error)
    }
}

const updateMoney = async (quantity, type, customerId) => {
    try {
        if (type === 'substract'){
            quantity *= -1
        }
        const result = await fetch(BASE_URL + '/customer/account/update/money/' + customerId)
        return result
    } catch (error) {
        console.error(error)
    }
}

const transferMoney = async (customerId, receptorEmail, quantity) => {
    try {
        const receptorCustomer = await getCustomerInfo(receptorEmail)

        if (!receptorCustomer) {
            return -1
        }

        const transaction = {
            senderId: customerId,
            receptorId: receptorCustomer?.id,
            quantity: parseInt(quantity)
        }

        await fetch(BASE_URL + '/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })

        return 1
    } catch (error) {
        console.error(error)
    }
}

const apiCustomer = {
    getCustomerInfo,
    getCustomerCards,
    getCustomerMovements,
    createNewMovement,
    updateMoney,
    requestNewCard,
    transferMoney
}

export default apiCustomer