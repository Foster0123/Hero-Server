import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const port = 3000;
const host = "localhost";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlFilePath = path.join(__dirname, "html", "index.html");

const requestListener = (req, res) => {

	const server = http.createServer(requestListener);
	server.listen(port, host, () => {
		console.log(`Server Running On ${host}:${port}`);
	});
}