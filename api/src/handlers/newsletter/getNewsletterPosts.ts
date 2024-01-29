import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/db";

export default async function (_req: FastifyRequest, reply: FastifyReply) {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return reply.success(posts);
}
