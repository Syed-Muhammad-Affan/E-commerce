import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  const [gridView, setGridView] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-DBackground");
      document.body.classList.remove("bg-LBackground");
    } else {
      document.body.classList.remove("bg-DBackground");
      document.body.classList.add("bg-LBackground");
    }
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        gridView,
        setGridView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
