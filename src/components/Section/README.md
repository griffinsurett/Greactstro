# Section Component - Simplified Variant System

The Section component has been completely rewritten to be cleaner and more focused on the new variant system. The old complex placement logic has been removed in favor of a simpler, more maintainable approach.

## 🎯 **New Architecture**

### **Two Modes of Operation:**

1. **Variant Mode**: Uses the variant system with custom components
2. **Default Mode**: Traditional section with headings, descriptions, and dynamic content

## 📋 **Available Variants**

### **1. Hero Variant (`variant="hero"`)**

```astro
<Section variant="hero">
  <Hero
    heading="Welcome!"
    description="Beautiful hero section"
    buttons={[{ text: "Get Started", link: "/contact" }]}
  />
</Section>
```

### **2. Two Column Variant (`variant="twoCol"`)**

```astro
<Section variant="twoCol">
  <TwoCol reverse={false}>
    <div slot="left">
      <h2>Left Content</h2>
      <p>Your content here...</p>
    </div>

    <div slot="right">
      <h3>Right Content</h3>
      <p>More content here...</p>
    </div>
  </TwoCol>
</Section>
```

### **3. Card Grid Variant (`variant="cardGrid"`)**

```astro
<Section variant="cardGrid">
  <CardGrid columns={{ sm: 1, md: 2, lg: 3 }}>
    <div slot="cards">
      <div class="custom-card">Card 1</div>
      <div class="custom-card">Card 2</div>
    </div>
  </CardGrid>
</Section>
```

### **4. Centered Variant (`variant="centered"`)**

```astro
<Section variant="centered">
  <Centered maxWidth="max-w-4xl">
    <h2>Centered Content</h2>
    <p>This content is centered and has a max width.</p>
  </Centered>
</Section>
```

### **5. Simple Variant (`variant="simple"`)**

```astro
<Section variant="simple">
  <Simple title="Simple Section" subtitle="Clean layout">
    <p>Your content here</p>
  </Simple>
</Section>
```

## 🔧 **Props Reference**

### **Basic Props**

- `id`: Custom section ID
- `tagName`: HTML element to render (default: "section")
- `variant`: Variant to use (hero, twoCol, cardGrid, centered, simple)
- `variantProps`: Props to pass to variant component

### **Content Props**

- `heading`: Section heading (string or object)
- `description`: Section description
- `descriptionClass`: CSS classes for description
- `buttons`: Array of button objects

### **Collection Props**

- `collection`: Content collection name
- `query`: Query type (getAll, related, etc.)
- `component`: Component to render items

### **Styling Props**

- `sectionClass`: CSS classes for section element
- `contentClass`: CSS classes for content wrapper
- `itemsClass`: CSS classes for items container
- `itemClass`: CSS classes for individual items
- `buttonsSectionClass`: CSS classes for buttons container
- `headingAreaClass`: CSS classes for heading area

### **Background Props**

- `backgroundMedia`: Background media configuration

### **Client Props**

- `client`: Hydration strategy (load, visible, idle)
- `slider`: Slider configuration object

### **Sorting Props**

- `sortBy`: Field to sort by (title, date)
- `sortOrder`: Sort direction (asc, desc)
- `manualOrder`: Use frontmatter order values

## 🎨 **Usage Examples**

### **Basic Section**

```astro
<Section>
  <h1>Simple Section</h1>
  <p>Your content here</p>
</Section>
```

### **Section with Collection**

```astro
<Section
  collection="services"
  query="getAll"
  heading={{ text: "Our Services", tagName: "h2" }}
  description="Explore our comprehensive range of services"
/>
```

### **Section with Variant and Custom Props**

```astro
<Section
  variant="twoCol"
  variantProps={{ reverse: true, gap: "gap-[var(--spacing-2xl)]" }}
>
  <TwoCol>
    <div slot="left">Left content</div>
    <div slot="right">Right content</div>
  </TwoCol>
</Section>
```

### **Section with Dynamic Content and Variant**

```astro
<Section
  variant="cardGrid"
  collection="projects"
  query="getAll"
  heading={{ text: "Our Projects", tagName: "h2" }}
  client="idle"
  slider={{ enabled: true, slidesToShow: 3 }}
/>
```

## 🚀 **Creating Custom Variants**

1. **Create Component**: Add new component in `src/components/Section/Variants/`
2. **Add to Wrapper**: Update `VariantWrapper.astro` with new mapping
3. **Export**: Add to `src/components/Section/Variants/index.ts`
4. **Use**: `<Section variant="yourVariant"><YourVariant /></Section>`

### **Example Custom Variant**

```astro
---
// src/components/Section/Variants/CustomVariant.astro
interface Props {
  title?: string;
  customProp?: string;
}

const { title = "Default Title", customProp = "default" } = Astro.props;
---

<div class="custom-variant">
  <h2>{title}</h2>
  <div class="custom-content">
    <slot />
  </div>
  <slot name="footer" />
</div>
```

## 🔄 **Migration from Old System**

### **Old Complex Usage**

```astro
<Section
  variant="primaryHero"
  heading={{ before: "Welcome to ", text: "Greactstro", tagName: "h1" }}
  description="Welcome to Greactstro!"
  buttons={[
    { text: "See Our CTA", link: "/contact-us", variant: "secondary" },
    { text: "Learn More About Us", link: "/about-us" },
  ]}
/>
```

### **New Simplified Usage**

```astro
<Section variant="hero">
  <Hero
    heading="Welcome to Greactstro!"
    description="Welcome to Greactstro!"
    buttons={[
      { text: "See Our CTA", link: "/contact-us", variant: "secondary" },
      { text: "Learn More About Us", link: "/about-us" },
    ]}
  />
</Section>
```

## ✨ **Benefits of New System**

- **Cleaner Code**: Removed complex placement logic
- **Better Maintainability**: Simpler, more focused component
- **Easier Debugging**: Clear separation between variant and default modes
- **Flexible Slots**: Named slots for organized content
- **Type Safety**: Better TypeScript support
- **Performance**: Reduced complexity and better tree-shaking

## 📚 **Examples**

See `src/pages/variants-demo.astro` for comprehensive examples of all variants and their usage patterns.
