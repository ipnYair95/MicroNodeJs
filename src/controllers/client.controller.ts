import { Request, Response } from "express";
import { conexion } from "../database";

export async function getClients(
	req: Request,
	resp: Response
): Promise<Response> {
	try {
		const conn = await conexion();
		const clients = await conn.query("SELECT * FROM cliente");

		return resp.status(200).json(clients[0]);
	} catch (error) {
		return resp.status(500).json({
			message: error
		});
	}
}
