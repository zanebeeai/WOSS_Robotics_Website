import "fastify";
import { APIError } from "./types";

declare module "fastify" {
  interface FastifyReply {
    success: <T extends unknown>(data?: T) => FastifyReply;
    error: (code: number, error: APIError) => FastifyReply;
  }
}
