require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { _router } from "./app/app.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

// dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

/* App Variables */
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/* App Configuration */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", _router);
app.use(errorHandler);
app.use(notFoundHandler);

/* Server Activation */
const _server = app.listen(PORT);
module.exports = _server;