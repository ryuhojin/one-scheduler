import Fastify from "fastify";
import cors from "@fastify/cors";

import { env } from "./config/env.js";
import { registerHealthRoute } from "./routes/health.js";

async function bootstrap(): Promise<void> {
  const app = Fastify({
    logger: true
  });

  await app.register(cors, {
    origin: true,
    credentials: true
  });

  await registerHealthRoute(app);

  await app.listen({
    port: env.PORT,
    host: "0.0.0.0"
  });
}

bootstrap().catch((error) => {
  // Start-up errors should crash the process for quick feedback in development.
  console.error(error);
  process.exit(1);
});
