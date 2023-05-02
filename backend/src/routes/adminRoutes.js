import { Router } from "express"
import { adminController } from "../controller/adminController.js"

const router = Router()

router.post('/admin/new-customer', adminController.postNewCustomer)

router.get('/admin/customers', adminController.getAllCustomer)

export default router