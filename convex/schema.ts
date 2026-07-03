import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  Products: defineTable({
    title: v.string(),
    description: v.string(),
    price: v.number(),
    img1: v.string(),
    img2: v.string(),
    quantity: v.number(),
    category: v.string(),
    featured: v.boolean(),
  })
    .index("by_title", ["title"])
    .index("by_featured", ["featured"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["category"],
    }),

  CartItem: defineTable({
    userId: v.string(),
    productId: v.id("Products"),
    quantity: v.number(),
  }).index("by_user_products", ["userId", "productId"]),
});
