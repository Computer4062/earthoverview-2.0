import express from "express"
import api from "./index.js"

const app = express();
const port = 3300;

app.use("/api/v1", api);

app.listen(port, () => {
	console.log(`🚀 Server is listening on Port ${port}`);
});