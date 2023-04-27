import { Router } from "express";
import customerController from "../controller/customerController.js";

const router = Router()

router.get('/', customerController.getAuthCustomer)

router.get('/my/dashboard/:id', customerController.getCustomerInfo)

export default router