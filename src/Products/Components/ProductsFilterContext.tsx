// ProductFilterContext.tsx
import { createContext, useContext, ReactNode } from "react";
import { useProductFilter } from "./useProductFilter";

type ProductFilterContextType = ReturnType<typeof useProductFilter>;

const ProductFilterContext = createContext<ProductFilterContextType | null>(
  null,
);

export function ProductFilterProvider({ children }: { children: ReactNode }) {
  const value = useProductFilter();
  return (
    <ProductFilterContext.Provider value={value}>
      {children}
    </ProductFilterContext.Provider>
  );
}

export function useProductFilterContext() {
  const ctx = useContext(ProductFilterContext);
  if (!ctx)
    throw new Error(
      "useProductFilterContext must be used within ProductFilterProvider",
    );
  return ctx;
}
