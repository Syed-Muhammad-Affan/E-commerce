import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { useApp } from "./useContext/useApp";

export function SignInForm() {
  const { darkMode } = useApp();

  return (
    <section>
      <div className="flex flex-col gap-7 max-w-7xl m-auto px-5 py-24 items-center">
        <h1 className={`${darkMode ? "text-DText" : "text-LText"}`}>
          Hi! Welcome to Anime Tees
        </h1>
        <p className={`${darkMode ? "text-DText" : "text-LText"}`}>
          Please <span className="text-LSecondary font-bold">Sign In</span> if
          you have account or
          <span className="text-LHighlight font-bold"> Sign Up</span> if you
          don't have any account.
        </p>
        <div className="flex flex-col gap-5 w-full items-center">
          <SignInButton mode="modal">
            <button className="cursor-pointer rounded-lg bg-LSecondary w-1/3 py-1 text-xl border border-transparent text-DText hover:bg-transparent hover:border-LSecondary hover:text-LSecondary">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="cursor-pointer rounded-lg bg-LHighlight w-1/3 py-1 text-xl text-DText border border-transparent hover:bg-transparent hover:border-LHighlight hover:text-LHighlight">
              Sign up
            </button>
          </SignUpButton>
        </div>
      </div>
    </section>
  );
}
