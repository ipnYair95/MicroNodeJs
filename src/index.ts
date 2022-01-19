import { App } from "./app";
import { conexion } from "./database";

const main = async () => {
	const app = new App(3001);
	await app.listen();
};

main();