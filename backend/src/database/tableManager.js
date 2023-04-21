import AccountModel from "../models/Account.js";
import UserModel from "../models/User.js";
import CustomerModel from "../models/Customer.js";

const initManager = sequelize => {
    const customer = sequelize.define('Customer', CustomerModel)
    const user = sequelize.define('User', UserModel)
    const account = sequelize.define('Account', AccountModel)

    customer.hasOne(user)
    user.belongsTo(customer)

    user.hasOne(account)
    account.belongsTo(user)

    
}

export default initManager