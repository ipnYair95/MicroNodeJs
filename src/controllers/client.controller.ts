import { Request, Response } from "express";
import { conexion } from "../database";
import { Cliente } from "../interfaces/client";


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
			message: error,
		});
	}
}

export async function createClient(
	req: Request,
	resp: Response
): Promise<Response> {
	try {
		const newClient: Cliente = req.body;
		const conn = await conexion();
		await conn.query(`INSERT INTO cliente SET ?`, newClient);
		return resp
			.status(200)
			.json({ message: "Registro creado correctamente" });
	} catch (error) {
		return resp.status(500).json({
			message: error,
		});
	}
}

export async function getClient(
	req: Request,
	resp: Response
): Promise<Response> {
	try {
		const id = req.params.clientId;
		const conn = await conexion();
		const client = await conn.query(
			"SELECT * FROM cliente WHERE cliente_id = ?",
			[id]
		);
		return resp.status(200).json(client[0]);
	} catch (error) {
		return resp.status(500).json({
			message: error,
		});
	}
}

export async function updateClient(
	req: Request,
	resp: Response
): Promise<Response> {
	try {
		const id = req.params.clientId;
		const updateClient: Cliente = req.body;
		const conn = await conexion();

		await conn.query(
			"UPDATE cliente SET ? WHERE cliente_id = ?",
			[ updateClient, id]
		);
		return resp
			.status(200)
			.json({ message: "Cliente actualizado" });
	} catch (error) {
		return resp.status(500).json({
			message: error,
		});
	}
}

export async function deleteClient(
	req: Request,
	resp: Response
): Promise<Response> {
	try {
		const id = req.params.clientId;
		const conn = await conexion();
		await conn.query(
			'DELETE FROM cliente WHERE cliente_id = ?', [id]
		);
		return resp
			.status(200)
			.json({ message: "Cliente elimnado con exito" });
	} catch (error) {
		return resp.status(500).json({
			message: error,
		});
	}
}
