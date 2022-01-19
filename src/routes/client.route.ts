import { Router } from "express";
import {
	getClients,
	createClient,
	getClient,
	updateClient,
	deleteClient,
} from "../controllers/client.controller";

const router = Router();

/* router.route("/client").get(getClients);
router.route("/client/:clientId").get(getClient);

router.route("/client").post(createClient);
router.route("/client/:clientId").put(updateClient);

router.route("/client/:clientId").delete(deleteClient);
 */

router.route("/client").get(getClients).post(createClient);

router.route("/client/:clientId")
	.get(getClient)
	.put(updateClient)
	.delete(deleteClient);

export default router;
