import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { prisma } from "../../lib/db";

const createNewsletterPostSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export default async function (
  req: FastifyRequest<{
    Body: z.infer<typeof createNewsletterPostSchema>;
  }>,
  reply: FastifyReply
) {
  const body = createNewsletterPostSchema.safeParse(req.body);

  if (!body.success) {
    return reply.error(400, {
      code: "bad_request",
      message: String(fromZodError(body.error)),
    });
  }

  const { title, content } = body.data;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return reply.success(post);
  } catch (e) {
    return reply.error(500, {
      code: "internal_server_error",
      message: "Something went wrong",
    });
  }
}
