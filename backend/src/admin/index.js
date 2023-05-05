import { adminServices } from "./services/adminServices.js";
import { adminController } from "./controller/adminController.js";
import adminRouter from "./routes/adminRoutes.js";

const adminIndex = {
    adminServices,
    adminController,
    adminRouter
}

export default adminIndex