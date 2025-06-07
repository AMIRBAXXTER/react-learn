import { NavLink } from "react-router-dom";

export default function HeaderLink({ to, children, end = false }) {
  const baseClass =
    "w-20 bg-slate-200 rounded px-3 py-1 hover:bg-orange-200 transition-all m-auto";
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        (isActive
          ? "text-orange-500 ring-2 ring-orange-300 "
          : "text-gray-700 ") + baseClass
      }
      children={children}
    />

  );
}
