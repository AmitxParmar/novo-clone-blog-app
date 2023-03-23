import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const postRouter = createTRPCRouter({
    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.post.delete({
                where: {
                    id: input.id,
                },
            });
        }),

    create: protectedProcedure
        .input(
            z.object({ title: z.string(), content: z.string(), categoryId: z.string() })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.post.create({
                data: {
                    title: input.title,
                    categoryId: input.categoryId,
                    content: input.content,
                },
            });
        }),

    getAll: protectedProcedure
        .input(z.object({ categoryId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.post.findMany({
                where: {
                    categoryId: input.categoryId,
                },
            });
        }),
});