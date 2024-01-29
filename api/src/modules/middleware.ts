import { FastifyInstance, FastifyReply } from "fastify";
import fp from "fastify-plugin";
import { APIError } from "../types";

export const middleware = fp(
  async (fastify: FastifyInstance, _opts: unknown) => {
    fastify.decorateReply(
      "success",
      function (this: FastifyReply, data?: unknown) {
        return data
          ? this.send({
              success: true,
              data,
            })
          : this.status(204).send();
      }
    );

    fastify.decorateReply(
      "error",
      function (this: FastifyReply, code: number, error: APIError) {
        return this.status(code).send({
          success: false,
          error,
        });
      }
    );
  }
);
