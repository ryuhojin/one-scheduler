import { FastifyInstance } from "fastify";

export async function registerHealthRoute(app: FastifyInstance): Promise<void> {
  app.get("/health", async () => {
    return {
      status: "ok",
      service: "one-line-api",
      timestamp: new Date().toISOString()
    };
  });
}
