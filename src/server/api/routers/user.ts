import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
	getList: publicProcedure.query(async ({ input, ctx }) => {
		const users = await ctx.payload.find({ collection: "users" });
		return users.docs;
	}),
});
