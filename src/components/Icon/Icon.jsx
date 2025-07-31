// src/components/Icon/Icon.jsx
export default function Icon({ icon, className = "" }) {
  if (icon == null) return null;

  // 1) React element / inline SVG
  if (typeof icon === "object" && (icon.$$typeof || typeof icon === "function")) {
    const Element = icon;
    return <Element className={className} />;
  }

  // 2) imported asset (object with .src)
  if (typeof icon === "object" && icon.src) {
    return <img src={icon.src} alt="" className={className} loading="lazy" />;
  }

  if (typeof icon === "function") {
   const Comp = icon;
   return <Comp className={className} />;
  }


  // 3) URL or raw SVG string or emoji/text
  if (typeof icon === "string") {
    const isUrl     = icon.startsWith("http") || icon.startsWith("/");
    const isSvgText = icon.trim().startsWith("<svg");
    if (isUrl) {
      return <img src={icon} alt="" className={className} loading="lazy" />;
    }
    if (isSvgText) {
      return (
        <span
          className={className}
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      );
    }
    // fallback: emoji or text
    return <span className={className}>{icon}</span>;
  }

  return null;
}
