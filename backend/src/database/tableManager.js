import AccountModel from "../models/Account.js";
import UserModel from "../models/User.js";
import CustomerModel from "../models/Customer.js";
import CardModel from "../models/Card.js";
import MovementModel from "../models/Movement.js";
import LoanRequestModel from "../models/LoanRequest.js";
import LoanModel from "../models/Loan.js";

import sequelize from "./sequelize.js";

const customer = sequelize.define('Customer', CustomerModel)
const user = sequelize.define('User', UserModel)
const account = sequelize.define('Account', AccountModel)
const card = sequelize.define('Card', CardModel)
const movement = sequelize.define('Movement', MovementModel)
const loanRequest = sequelize.define('LoanRequest', LoanRequestModel)
const loan = sequelize.define('Loan', LoanModel)

const tables = {
    customer,
    user,
    account,
    card,
    movement,
    loanRequest,
    loan
}

const initManager = () => {

    customer.hasOne(user)
    user.belongsTo(customer)

    user.hasOne(account)
    account.belongsTo(user)

    account.hasMany(card)
    card.belongsTo(account)

    account.hasMany(movement)
    movement.belongsTo(account)

    account.hasMany(loanRequest)
    loanRequest.belongsTo(account)

    account.hasMany(loan)
    loanRequest.hasMany(loan)
    loan.belongsTo(account)
    loan.belongsTo(loanRequest)
}

const tableManager = {
    initManager,
    tables
}

export default tableManager