import { Router } from "express";
import customerController from "../controller/customerController.js";

const customerRouter = Router()

customerRouter.post('/', customerController.getAuthCustomer)

customerRouter.get('/my/dashboard/:email', customerController.getCustomerDashboard)

customerRouter.get('/my/cards/:id', customerController.getCardsFromCustomer)

customerRouter.post('/my/cards/new-card/:id', customerController.postNewCard)

customerRouter.post('/my/new-loan-request/:id', customerController.postNewLoanRequest)

customerRouter.get('/my/loans/:id', customerController.getLoanRequests)

customerRouter.post('/my/movements/new-movement/:id', customerController.postNewMovement)

customerRouter.get('/my/movements/:id', customerController.getMovementList)

customerRouter.put('/customer/account/update/money/:id', customerController.putUserMoney)

customerRouter.post('/transfer', customerController.transferMoneyToCustomer)

export default customerRouter