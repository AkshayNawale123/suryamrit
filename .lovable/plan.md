
# Premium + Social Cause: Website Overhaul Plan

## Overview
This plan addresses the critical feedback to transform SuryAmrit from appearing as a "cheap product" to a "premium product with a social mission subsidy." The goal is to close the "Price-Trust Gap" where consumers might misinterpret the low price as low quality.

---

## 1. Fix Browser Title (Immediate)

**Current Problem:**
The browser title shows "suryaamrit-digital-bloom" - a template placeholder that undermines the premium positioning.

**Files to modify:**
- `index.html`
- `src/components/SEOHead.tsx`

**Changes:**
- Update `index.html` default title to: "SuryAmrit | The Gold Standard of Vitamin D"
- Update Open Graph and Twitter meta tags accordingly
- SEOHead.tsx already has proper page-specific titles, but verify all pages have premium-sounding titles

---

## 2. Implement "Transparency Pricing" - The Subsidy Model

**Current Problem:**
Price displays as just "₹99" which looks cheap, not subsidized.

**Premium/Social Approach:**
```
MRP: ₹399
Mission Subsidy: -₹300
You Pay: ₹99
(Direct-to-Consumer Pilot)
```

**Files to modify:**
- `src/components/ProductCard.tsx` - Update price display
- `src/pages/WhereToBuy.tsx` - Update Trial Pack badge and pricing
- `src/pages/HomePage.tsx` - Update star badge pricing
- `src/components/StickyOrderButton.tsx` - Update pricing display

**Key changes:**
- Create a new `PremiumPriceDisplay` component showing MRP, subsidy breakdown
- Replace simple price displays with the transparency pricing format
- Add "Citizen Trial" / "Mission Pilot" messaging

---

## 3. Restructure Where to Buy Page Architecture

**Current Problem:**
The ₹99 Trial Pack is the hero, which positions it as a "cheap product."

**New Architecture:**
- **Hero Product**: The ₹351 Semester Pack (establishes real value anchor)
- **Secondary**: The ₹99 as "Limited Access Citizen Trial"
- Messaging: "We are absorbing the cost so you can feel the difference"

**Files to modify:**
- `src/pages/WhereToBuy.tsx`

**Changes:**
- Reorder products to show higher-value pack first
- Create distinct visual treatment for Trial vs Premium tiers
- Add "Mission Subsidy" explanation card

---

## 4. Visual Language Refinements (Clinic vs Bazaar)

**Current Problem:**
Red/orange "sale" badges look like discount bazaar, not medical-grade purity.

**Color Adjustments:**
- Replace red/orange Trial Pack badge colors with Gold (#F5B800) + White
- Use the existing amber/gold primary palette consistently
- Remove "sale-like" visual patterns

**Typography Enhancement:**
- Add Playfair Display (serif) for headings via Google Fonts
- Keep clean sans-serif for body text
- This gives a "premium clinic" aesthetic

**Files to modify:**
- `index.html` - Add Google Fonts link
- `tailwind.config.ts` - Add font family configuration
- `src/index.css` - Apply font styles
- `src/pages/WhereToBuy.tsx` - Update badge colors
- `src/pages/HomePage.tsx` - Update badge colors

---

## Technical Implementation Details

### New Component: PremiumPriceDisplay
```tsx
// Shows: MRP ₹399 → Mission Subsidy -₹300 → You Pay ₹99
interface PremiumPriceDisplayProps {
  originalPrice: string;  // The MRP (e.g., "399")
  subsidyAmount: string;  // The discount (e.g., "300")
  finalPrice: string;     // What user pays (e.g., "99")
  currency?: string;
  label?: string;         // e.g., "Citizen Trial"
}
```

### Font Integration
Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
```

Add to `tailwind.config.ts`:
```ts
fontFamily: {
  serif: ['Playfair Display', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

### Badge Color Updates
- Replace: `from-red-500 to-orange-500`
- With: `from-primary to-amber-500` (Gold tones)
- Add white borders and clinical shadows

---

## Summary of Files to Edit

| File | Changes |
|------|---------|
| `index.html` | Update title, meta tags, add Google Fonts |
| `src/components/SEOHead.tsx` | Verify premium-sounding page titles |
| `src/components/ProductCard.tsx` | Implement transparency pricing display |
| `src/pages/WhereToBuy.tsx` | Restructure hero, update badges, add mission messaging |
| `src/pages/HomePage.tsx` | Update star badge with subsidy breakdown |
| `src/components/StickyOrderButton.tsx` | Update to show premium positioning |
| `tailwind.config.ts` | Add serif font family |
| `src/index.css` | Apply typography styles |

---

## New Component to Create

| File | Purpose |
|------|---------|
| `src/components/PremiumPriceDisplay.tsx` | Reusable component showing MRP, subsidy, final price |

---

## Expected Outcome

After implementation:
1. Browser title shows "SuryAmrit | The Gold Standard of Vitamin D"
2. All prices show the value anchor: "MRP ₹399 → You Pay ₹99"
3. Trial Pack positioned as "Citizen Pilot" not "cheap product"
4. Higher-value packs displayed as hero products
5. Typography conveys medical-grade premium quality
6. Color scheme is gold/white "clinic" aesthetic, not red/green "bazaar"
