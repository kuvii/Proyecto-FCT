import { Router } from "express";
import customerController from "../controller/customerController.js";

const router = Router()

router.get('/', customerController.getAuthCustomer)

router.get('/my/dashboard/:id', customerController.getCustomerInfo)

router.get('/my/cards/:id', customerController.getCardsFromCustomer)

router.post('/my/cards/new-card/:id', customerController.postNewCard)

export default router