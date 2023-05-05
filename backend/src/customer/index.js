import { customerServices } from "./services/customerServices.js";
import customerController from "./controller/customerController.js";
import customerRouter from "./routes/customerRoutes.js";

const customerIndex = {
    customerServices,
    customerController,
    customerRouter
}

export default customerIndex