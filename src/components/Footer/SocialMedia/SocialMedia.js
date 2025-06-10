import React, { useRef } from 'react';

export default function SocialMedia({ name, url, Icon, colorClass }) {
  const spotRef = useRef(null);
  const btnRef = useRef(null);

  function handleMouseMove(e) {
    const btn = btnRef.current;
    const spot = spotRef.current;
    if (!btn || !spot) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spot.style.left = `${x}px`;
    spot.style.top = `${y}px`;
    spot.style.opacity = 1;
  }
  function handleMouseLeave() {
    if (spotRef.current) spotRef.current.style.opacity = 0;
  }

  return (
    <li className="flex justify-center">
      <a
        href={url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        ref={btnRef}
        className="
          relative flex flex-col items-center justify-center
          w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12
          rounded-full bg-white/10 text-white shadow-md text-lg
          transition focus:outline-none overflow-hidden
        "
        style={{ WebkitTapHighlightColor: "transparent" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        title={name}
      >
        <span
          ref={spotRef}
          className={`
            pointer-events-none absolute
            w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8
            -translate-x-1/2 -translate-y-1/2
            rounded-full opacity-0 transition duration-200 z-0
            ${colorClass}
          `}
          style={{ left: "50%", top: "50%", opacity: 0 }}
        />
        <span className="z-10">
          {Icon && <Icon />}
        </span>
        <span className="sr-only">{name}</span>
      </a>
    </li>
  );
}
