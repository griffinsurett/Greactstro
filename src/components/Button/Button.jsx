// src/components/Button/Button.jsx
import ButtonIcon from "./ButtonIcon";
import { ButtonVariants } from "./ButtonVariants.js";

export default function Button({
  as = "button",
  type = "button",
  href,
  disabled = false,
  onClick,
  children,
  className = "",
  variant = "primary",
  iconProps = {},      // { icon, hoverOnly, position, className }
  ...props
}) {
  const { variantClasses, buttonClasses, iconDefaults } =
    ButtonVariants[variant] || ButtonVariants.primary;

  // merge variant defaults with user overrides
  const {
    icon: defaultIcon,
    hoverOnly: defaultHover,
    position: defaultPosition = "right",
    className: defaultIconClass = "",
  } = iconDefaults;
  const {
    icon: overrideIcon,
    hoverOnly: overrideHover,
    position: overridePosition,
    className: overrideIconClass,
  } = iconProps;

  const finalIcon       = overrideIcon      ?? defaultIcon;
  const finalHoverOnly  = overrideHover     ?? defaultHover;
  const finalPosition   = overridePosition  ?? defaultPosition;
  const finalIconClass  = overrideIconClass ?? defaultIconClass;

  // pick your tag
  const Tag = href && !disabled ? "a" : as;
  const classes = [
    className,
    variantClasses,
    buttonClasses,
    disabled ? "pointer-events-none opacity-50" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const extra = { ...props };
  if (Tag === "button") {
    extra.type = type;
    extra.disabled = disabled;
  } else {
    extra.href = disabled ? undefined : href;
  }

  return (
    <Tag
      className={classes}
      onClick={disabled ? undefined : onClick}
      {...extra}
    >
      {finalIcon && finalPosition === "left" && (
        <ButtonIcon
          icon={finalIcon}
          hoverOnly={finalHoverOnly}
          position="left"
          className={finalIconClass}
        />
      )}

      {children}

      {finalIcon && finalPosition === "right" && (
        <ButtonIcon
          icon={finalIcon}
          hoverOnly={finalHoverOnly}
          position="right"
          className={finalIconClass}
        />
      )}
    </Tag>
  );
}
