import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { createPortal } from "react-dom";

// Component
import AuthModal from "../modals/AuthModal";

// Type
import type { SocialProvider } from "../../type/AuthType";

const menus = [
  { to: "/", label: "공부" },
  { to: "/game", label: "게임" },
  { to: "/meal", label: "식사" },
  { to: "/exercise", label: "운동" },
];

function TopBar() {
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-1 flex-row justify-between items-center-safe">
        <div className="flex justify-center-safe items-center-safe h-full gap-7.5">
          <Link to="/" className="text-3xl font-bold">
            UNILINK
          </Link>

          <div className="hidden flex-row lg:flex">
            {menus.map((menu) => (
              <NavLink
                key={menu.to}
                to={menu.to}
                className={({ isActive }) =>
                  `
                  px-2.5 py-1.25
                  ${
                    isActive
                      ? "text-red-500 dark:text-blue-500"
                      : "text-stone-950/50 dark:text-stone-50/50"
                  }
                `
                }
              >
                <span className="font-semibold">{menu.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex justify-center-safe items-center-safe gap-7.5">
          <LightDarkToggle />
          <button
            className="flex justify-center-safe items-center-safe bg-red-500 px-3 py-1 rounded-lg dark:bg-blue-500"
            onClick={() => setAuthModalIsOpen(true)}
          >
            <span className="text-white font-semibold">로그인</span>
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={authModalIsOpen}
        onClose={() => setAuthModalIsOpen(false)}
      />
    </>
  );
}

type LightDark = "light" | "dark";

function LightDarkToggle() {
  const [mode, setMode] = useState<LightDark>("light");
  const isDark = mode === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={() => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      }}
      className={`
        relative inline-flex h-6 w-11 items-center-safe rounded-full
        transition-colors
        ${isDark ? "bg-slate-800" : "bg-slate-300"}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 rounded-full bg-white
          transition-transform
          ${isDark ? "translate-x-6" : "translate-x-1"}
          `}
      />
    </button>
  );
}

export default TopBar;
