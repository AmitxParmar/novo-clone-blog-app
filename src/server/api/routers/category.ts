import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string(), emoji: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.category.create({
        data: {
          emoji: input.emoji,
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),
});
