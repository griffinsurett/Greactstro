// src/components/Button/ButtonIcon.jsx
import Icon from "../Icon/Icon";

export default function ButtonIcon({
  icon,
  hoverOnly = false,
  animateIcon = false,
  position = "right",
  className = "",
}) {
  if (icon == null) return null;

  // hover/animation container
  let hoverClasses = "";
  if (hoverOnly) {
    hoverClasses = animateIcon
      ? position === "right"
        ? "inline-flex w-0 overflow-hidden transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:ml-2 group-hover:translate-x-0 group-hover:opacity-100"
        : "inline-flex w-0 overflow-hidden transform translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:mr-2 group-hover:translate-x-0 group-hover:opacity-100"
      : position === "right"
      ? "inline-flex w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:ml-2 group-hover:opacity-100"
      : "inline-flex w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:mr-2 group-hover:opacity-100";
  } else {
    hoverClasses = position === "right" ? "ml-2 inline-flex" : "inline-flex";
  }

  const containerClass = className
    ? `${className} ${hoverClasses}`.trim()
    : hoverClasses;

  return (
    <span className={containerClass}>
      <Icon icon={icon} className="h-auto w-6 logo-class" />
    </span>
  );
}
