import { Router } from "express"
import { adminController } from "../controller/adminController.js"

const adminRouter = Router()

adminRouter.post('/admin/new-customer', adminController.postNewCustomer)

adminRouter.get('/admin/customers', adminController.getAllCustomer)

adminRouter.get('/admin/get-role/:id', adminController.getUserRoleFromId)

adminRouter.put('/admin/cards/requests/:id', adminController.updateCardRequest)

export default adminRouter