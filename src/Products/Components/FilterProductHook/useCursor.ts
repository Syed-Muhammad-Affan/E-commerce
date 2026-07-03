import { useState } from "react";

export function useCursor() {
  const [cursor, setCursor] = useState("0");

  return {
    cursor,
    setCursor,
  };
}
