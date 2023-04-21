import AccountModel from "../models/Account.js";
import UserModel from "../models/User.js";
import CustomerModel from "../models/Customer.js";
import CardModel from "../models/Card.js";

const initManager = sequelize => {
    const customer = sequelize.define('Customer', CustomerModel)
    const user = sequelize.define('User', UserModel)
    const account = sequelize.define('Account', AccountModel)
    const card = sequelize.define('Card', CardModel)

    customer.hasOne(user)
    user.belongsTo(customer)

    user.hasOne(account)
    account.belongsTo(user)

    account.hasMany(card)
    card.belongsTo(account)
}

export default initManager