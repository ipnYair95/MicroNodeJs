import { Router } from "express";
import { getClients } from "../controllers/client.controller";

const router = Router();

router.route("/client").get(getClients);

export default router;
