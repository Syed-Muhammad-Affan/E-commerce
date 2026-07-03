import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import {
  buildFilters,
  getAuthenticatedUser,
  getExistingCartItem,
  getUserCartItem,
} from "./helpers";
import { Doc } from "./_generated/dataModel";
import { paginationOptsValidator } from "convex/server";
// import { filter } from "convex-helpers/server/filter";
// import { api } from "./_generated/api";

export const productsList = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("Products").collect();
  },
});

export const getProducts = query({
  args: {
    paginationOpts: paginationOptsValidator,
    sort: v.string(),
    category: v.optional(v.string()),
    price: v.optional(v.number()),
    title: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Step 1: Build base query with index + order + built-in filters
    const baseQuery = ctx.db
      .query("Products")
      .withIndex("by_title")
      .order(args.sort === "Z-A" ? "desc" : "asc")
      .filter((q) => {
        const f = buildFilters(q, {
          category: args.category,
          price: args.price,
        });
        return f ?? true;
      });

    // Step 2: Collect ALL matching docs first, then slice manually
    const allDocs = await baseQuery.collect();

    // Step 3: Apply JS-level title filter BEFORE paginating
    const filtered = args.title
      ? allDocs.filter((doc) =>
          doc.title.toLowerCase().includes(args.title!.toLowerCase()),
        )
      : allDocs;

    // Step 4: Manual pagination
    const pageSize = args.paginationOpts.numItems ?? 10;
    const cursor = args.paginationOpts.cursor
      ? parseInt(args.paginationOpts.cursor)
      : 0;

    const page = filtered.slice(cursor, cursor + pageSize);
    const nextCursor = cursor + pageSize;
    const isDone = nextCursor >= filtered.length;

    return {
      page,
      isDone,
      continueCursor: isDone ? args.paginationOpts.cursor : String(nextCursor),
    };
  },
  // handler: async (ctx, args) => {
  //   // Step 1: Build the base query with index + order + built-in filters
  //   const baseQuery = ctx.db
  //     .query("Products")
  //     .withIndex("by_title")
  //     .order(args.sort === "Z-A" ? "desc" : "asc")
  //     .filter((q) => {
  //       const f = buildFilters(q, {
  //         category: args.category,
  //         price: args.price,
  //       });
  //       return f ?? true;
  //     });

  //   // Step 2: Wrap with the `filter` helper for substring title matching
  //   const filteredQuery = args.title
  //     ? filter(baseQuery, (doc) =>
  //         doc.title.toLowerCase().includes(args.title!.toLowerCase()),
  //       )
  //     : baseQuery;

  //   return await filteredQuery.paginate(args.paginationOpts);
  // },
});

export const get6Products = query({
  args: { limit: v.number() },
  handler: async (ctx, args) => {
    return await ctx.db.query("Products").order("desc").take(args.limit);
  },
});

export const getFeaturedProducts = query({
  args: {},
  handler: async (ctx) => {
    const products = await ctx.db
      .query("Products")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();
    return products;
  },
});

export const addItemToCart = mutation({
  args: {
    productId: v.id("Products"),
    quantity: v.number(),
  },

  handler: async (ctx, args) => {
    // const identity = await ctx.auth.getUserIdentity();
    // if (!identity) throw new Error("Not Authenticated");
    const userId = await getAuthenticatedUser(ctx);

    // const existing = await ctx.db
    //   .query("CartItem")
    //   .withIndex("by_user_products", (q) =>
    //     q.eq("userId", userId).eq("productId", args.productId),
    //   )
    //   .first();

    const existing = await getExistingCartItem(ctx, userId, args.productId);

    if (existing) {
      await ctx.db.patch("CartItem", existing._id, {
        quantity: existing.quantity + args.quantity,
      });
    } else {
      await ctx.db.insert("CartItem", {
        userId,
        productId: args.productId,
        quantity: args.quantity,
      });
    }
  },
});

// export const getCartItem = query({
//   args: {},

//   handler: async (ctx, args) => {
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) return [];
//     const userId = identity.subject;

//     const items = await ctx.db
//       .query("CartItem")
//       .withIndex("by_user_products", (q) => q.eq("userId", userId))
//       .collect();

//     const productIds = items.map((item) => item.productId);

//     const products = await Promise.all(
//       productIds.map((id) => ctx.db.get("Products", id)),
//     );

//     const productMap = new Map(
//       products.map((product) => [product?._id, product]),
//     );

//     const itemsWithProduct = items.map((item) => ({
//       ...item,
//       product: productMap.get(item.productId),
//     }));

//     return itemsWithProduct;
//   },
// });

export const getCartItem = query({
  args: {},

  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];
    const userId = identity.subject;

    // const items = await ctx.db
    //   .query("CartItem")
    //   .withIndex("by_user_products", (q) => q.eq("userId", userId))
    //   .collect();

    const items = await getUserCartItem(ctx, userId);

    const result = Promise.all(
      items.map(async (item: Doc<"CartItem">) => {
        const cartProducts = await ctx.db.get("Products", item.productId);

        if (!cartProducts) return null;

        return {
          ...cartProducts,
          selectedQuantity: item.quantity,
        };
      }),
    );

    return (await result).filter(Boolean);
  },
});

export const removeCartItem = mutation({
  args: { productId: v.id("Products") },
  handler: async (ctx, args) => {
    // const identity = await ctx.auth.getUserIdentity();
    // if (!identity) throw new Error("Not Authenticated");
    // const userId = identity.subject;

    const userId = await getAuthenticatedUser(ctx);

    // const item = await ctx.db
    //   .query("CartItem")
    //   .withIndex("by_user_products", (q) =>
    //     q.eq("userId", userId).eq("productId", args.productId),
    //   )
    //   .first();

    const item = await getExistingCartItem(ctx, userId, args.productId);

    if (!item) return;

    return await ctx.db.delete("CartItem", item._id);
  },
});

export const updateItemQuantity = mutation({
  args: { productId: v.id("Products"), quantity: v.number() },
  handler: async (ctx, args) => {
    // const identity = await ctx.auth.getUserIdentity();
    // if (!identity) throw new Error("Not Authenticated");
    // const userId = identity.subject;

    const userId = await getAuthenticatedUser(ctx);

    // const item = await ctx.db
    //   .query("CartItem")
    //   .withIndex("by_user_products", (q) =>
    //     q.eq("userId", userId).eq("productId", args.productId),
    //   )
    //   .first();
    const item = await getExistingCartItem(ctx, userId, args.productId);

    if (!item) return;
    if (args.quantity <= 0) {
      await ctx.db.delete("CartItem", item._id);
      return { status: "deleted" };
    }

    // if (item.quantity === 0) {
    //   await ctx.db.delete("CartItem", item._id);
    // }

    await ctx.db.patch("CartItem", item._id, {
      quantity: args.quantity,
    });
  },
});

export const removeAllItem = mutation({
  args: {},
  handler: async (ctx) => {
    // const identity = await ctx.auth.getUserIdentity();
    // if (!identity) throw new Error("Not Authenticated");
    // const userId = identity.subject;

    const userId = await getAuthenticatedUser(ctx);

    // const items = await ctx.db
    //   .query("CartItem")
    //   .withIndex("by_user_products", (q) => q.eq("userId", userId))
    //   .collect();

    const items = await getUserCartItem(ctx, userId);

    if (!items.length) return;

    await Promise.all(
      items.map((item: Doc<"CartItem">) => ctx.db.delete("CartItem", item._id)),
    );
  },
});
