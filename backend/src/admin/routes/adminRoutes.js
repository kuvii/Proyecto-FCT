import { Router } from "express"
import { adminController } from "../controller/adminController.js"

const adminRouter = Router()

adminRouter.post('/admin/new-customer', adminController.postNewCustomer)

adminRouter.get('/admin/customers', adminController.getAllCustomer)

export default adminRouter