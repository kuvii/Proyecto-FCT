import { Router } from "express";
import customerController from "../controller/customerController.js";

const router = Router()

router.get('/my/:id', async (req, res) => {
    const { id } = req.params
    const data = await customerController.getCustomerInfo(id)
    res.status(200).json(data)
})

router.post('/new-customer', async (req, res) => {
    try {
        const customerData = req.body
        await customerController.postNewCustomer(customerData)
        res.status(201).json('Created correctly')
    } catch (error) {
        res.status(500).json('Error creating new customer')
        console.error(error)
    }
})

export default router