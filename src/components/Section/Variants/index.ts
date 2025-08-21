// src/components/Section/Variants/index.ts
// Export all variant components

export { default as Hero } from "./Hero.astro";
export { default as TwoCol } from "./TwoCol.astro";
export { default as CardGrid } from "./CardGrid.astro";
export { default as Centered } from "./Centered.astro";
export { default as Simple } from "./Simple.astro";
export { default as Masonry } from "./Masonry.astro";
export { default as Tabs } from "./Tabs.astro";
export { default as Accordion } from "./Accordion.astro";
export { default as CustomGrid } from "./CustomGrid.astro";

// Type definitions for variant props
export interface HeroProps {
  heading?: string | any;
  description?: string;
  buttons?: any[];
  backgroundImage?: string;
  overlayOpacity?: number;
  minHeight?: string;
  textColor?: string;
  backgroundColor?: string;
  sectionPadding?: string;
}

export interface TwoColProps {
  leftColumnClass?: string;
  rightColumnClass?: string;
  reverse?: boolean;
  gap?: string;
  alignItems?: string;
  backgroundColor?: string;
  textColor?: string;
  sectionPadding?: string;
}

export interface CardGridProps {
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  cardClass?: string;
  showShadows?: boolean;
  hoverEffect?: boolean;
  backgroundColor?: string;
  textColor?: string;
  sectionPadding?: string;
}

export interface CenteredProps {
  maxWidth?: string;
  textAlign?: string;
  spacing?: string;
  padding?: string;
  backgroundColor?: string;
  textColor?: string;
  sectionPadding?: string;
}

export interface SimpleProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  sectionPadding?: string;
}

export interface MasonryProps {
  columns?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  gap?: string;
  itemMinWidth?: string;
  itemMaxWidth?: string;
  alignItems?: string;
  justifyItems?: string;
  masonryGap?: string;
  animation?: boolean;
  backgroundColor?: string;
  textColor?: string;
  sectionPadding?: string;
}

export interface TabsProps {
  orientation?: "horizontal" | "vertical";
  tabStyle?: "default" | "pills" | "underline" | "cards";
  activeTab?: number;
  fullWidth?: boolean;
  centered?: boolean;
  responsive?: boolean;
  animation?: boolean;
  tabSize?: "sm" | "md" | "lg";
  backgroundColor?: string;
  textColor?: string;
  sectionPadding?: string;
}

export interface AccordionProps {
  style?: "default" | "bordered" | "cards" | "minimal";
  behavior?: "single" | "multiple";
  animation?: boolean;
  iconPosition?: "left" | "right";
  iconStyle?: "chevron" | "plus" | "arrow" | "custom";
  spacing?: "sm" | "md" | "lg";
  defaultOpen?: number[];
  backgroundColor?: string;
  textColor?: string;
  sectionPadding?: string;
}

export interface CustomGridProps {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridAutoFlow?: "row" | "column" | "dense";
  gridAutoRows?: string;
  gridAutoColumns?: string;
  display?: "grid" | "flex" | "inline-grid" | "inline-flex";
  flexDirection?: "row" | "row-reverse" | "col" | "col-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  alignContent?: "start" | "end" | "center" | "between" | "around" | "stretch";
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  minHeight?: string;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  responsive?: {
    sm?: Partial<CustomGridProps>;
    md?: Partial<CustomGridProps>;
    lg?: Partial<CustomGridProps>;
    xl?: Partial<CustomGridProps>;
  };
  aspectRatio?: string;
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  position?: "relative" | "absolute" | "fixed" | "sticky";
  zIndex?: string;
  animation?: boolean;
  animationDelay?: string;
  animationDuration?: string;
  animationEasing?: string;
  backgroundColor?: string;
  textColor?: string;

  // Section Styling
  sectionPadding?: string;
}
