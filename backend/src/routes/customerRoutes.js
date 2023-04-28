import { Router } from "express";
import customerController from "../controller/customerController.js";

const router = Router()

router.get('/', customerController.getAuthCustomer)

router.get('/my/dashboard/:id', customerController.getCustomerInfo)

router.get('/my/cards/:id', customerController.getCardsFromCustomer)

router.post('/my/cards/new-card/:id', customerController.postNewCard)

router.post('/my/new-loan-request/:id', customerController.postNewLoanRequest)

router.get('/my/loans/:id', customerController.getLoanRequests)

router.post('/my/movements/new-movement/:id', customerController.postNewMovement)

router.get('/my/movements/:id', customerController.getMovementList)

export default router