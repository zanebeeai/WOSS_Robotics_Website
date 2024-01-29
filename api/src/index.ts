import fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";

import { HOST, PORT, CLIENT_URL, API_VERSION } from "./lib/constants";
import { Logger } from "./lib/logger";
import { middleware } from "./modules/middleware";
import { newsletterRoutes } from "./routes/newsletter";

const server = fastify({
  bodyLimit: 512 * 1024 * 1024, // 512MB
});

// Middleware
void server.register(cors, {
  credentials: true,
  origin: ["https://www.frc6070.ca", CLIENT_URL],
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
});

server.register(middleware);

// Routes
server.register(newsletterRoutes, { prefix: `/${API_VERSION}/newsletter` });

server.get("/", async (_req, res) => {
  res.status(200).send("hi from 6070 :)");
});

// Start up the server
server.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    Logger.error("SERVER", err.message);
    process.exit(1);
  }

  Logger.info("SERVER", `Listening at ${address}`);
});
