export async function getAuthenticatedUser(ctx: any) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Not Authenticated");
  return identity.subject;
}

export async function getExistingCartItem(
  ctx: any,
  userId: string,
  productId: string,
) {
  return await ctx.db
    .query("CartItem")
    .withIndex("by_user_products", (q: any) =>
      q.eq("userId", userId).eq("productId", productId),
    )
    .first();
}

export async function getUserCartItem(ctx: any, userId: string) {
  return await ctx.db
    .query("CartItem")
    .withIndex("by_user_products", (q: any) => q.eq("userId", userId))
    .collect();
}

export function buildFilters(
  q: any,
  args: {
    category?: string;
    price?: number;
    // title?: string;
  },
) {
  const filters = [];

  if (args.category) {
    filters.push(q.eq(q.field("category"), args.category));
  }

  if (args.price !== undefined && args.price !== 1100) {
    filters.push(q.lte(q.field("price"), args.price));
  }
  // if (args.title) {
  //   filters.push(q.eq(q.field("title"), args.title.toLocaleLowerCase()));
  // }

  if (filters.length === 0) return null;
  if (filters.length === 1) return filters[0];

  // multiple filters → combine with AND
  return filters.reduce((a, b) => q.and(a, b));
}
