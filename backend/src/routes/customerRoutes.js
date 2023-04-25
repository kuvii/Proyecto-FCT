import { Router } from "express";
import customerController from "../controller/customerController.js";

const router = Router()

router.get('/my/:id', async (req, res) => {
    const { id } = req.params
    const data = await customerController.getCustomerInfo(id)
    res.status(200).json(data)
})

router.post('/new-customer', customerController.postNewCustomer)

export default router