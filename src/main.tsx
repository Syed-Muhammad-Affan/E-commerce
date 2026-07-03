import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "./ErrorBoundary.tsx";
import { BrowserRouter } from "react-router-dom";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <App />
          </ConvexProviderWithClerk>
        </ClerkProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
