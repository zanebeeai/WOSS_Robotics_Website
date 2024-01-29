import type { FastifyInstance } from "fastify";
import createNewsletterPost from "../handlers/newsletter/createNewsletterPost";
import getNewsletterPosts from "../handlers/newsletter/getNewsletterPosts";

export const newsletterRoutes = (fastify: FastifyInstance, _: unknown, done: () => void) => {
  fastify.get("/", getNewsletterPosts);
  fastify.post("/", createNewsletterPost);

  done();
};