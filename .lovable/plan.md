

# Lokarth Foundation Brand Integration Plan

## Overview
Transform the pricing narrative from "cheap product" to "funded health campaign" by introducing Lokarth Foundation as the institutional benefactor. This elevates SuryAmrit from a discount brand to a mission-driven initiative backed by a credible foundation.

---

## The Narrative Shift

```text
BEFORE: "₹99 Trial Pack" → User thinks: "Cheap product"
AFTER:  "₹99 (Subsidized by Lokarth)" → User thinks: "Great opportunity"
```

**Core Principle**: Replace the word "Discount" with "Subsidy" throughout the entire application.

---

## Integration Points

### 1. Lokarth Logo Asset
Create or add a clean, professional Lokarth Foundation logo with the tagline:
- **Text**: "Serve Together. Change Forever."
- **Style**: Premium, institutional aesthetic (think Tata Trust/Gates Foundation)
- **File**: `src/assets/lokarth-logo.png` (will need to be provided or generated)

---

### 2. Header Integration - "Powered By" Badge

**File**: `src/components/Header.tsx`

Add a subtle "An Initiative by Lokarth" badge next to the SuryAmrit logo:

```text
[SuryAmrit Logo] [Lokarth Badge]
```

**Visual Treatment**:
- Small, professional badge with Lokarth branding
- Tooltip on hover explaining the foundation
- Positioned to the right of the main logo

---

### 3. Footer Integration - Foundation Section

**File**: `src/components/Footer.tsx`

Add a dedicated "Our Benefactor" section in the footer:

```text
┌─────────────────────────────────────┐
│  [Lokarth Logo]                     │
│  "An Initiative by Lokarth"         │
│  Serve Together. Change Forever.    │
│                                     │
│  Eradicating Silent Hunger from     │
│  India, one family at a time.       │
└─────────────────────────────────────┘
```

---

### 4. Buy Page - "Mission Funding Breakdown" Card

**File**: `src/pages/WhereToBuy.tsx`

Transform the existing "Mission Subsidy Explained" section (lines 257-333) to explicitly feature Lokarth:

**Current Title**: "Our Mission Subsidy"
**New Title**: "The Lokarth Health Grant"

**Updated Price Breakdown Visual**:
```text
┌────────────────────────────────────────────────────┐
│  MRP (Market Value)         ₹399  (Greyed out)     │
│  Lokarth Health Subsidy    -₹300  (Green/Gold)     │
│  ─────────────────────────────────────────────────│
│  Citizen Contribution       ₹99   (Bold Gold)      │
└────────────────────────────────────────────────────┘
```

**Updated Story Copy**:
> "This is a ₹399 Premium Ghee Softgel. You only pay ₹99 because Lokarth Foundation is investing the other ₹300 on your behalf to make India Vitamin D Efficient."

---

### 5. Homepage - "Why ₹99? The Lokarth Vision" Section

**File**: `src/pages/HomePage.tsx`

Add a new section after the "Nature's Sacred Gift" section explaining the Lokarth vision:

**Section Content**:
```text
┌─────────────────────────────────────────────────────────┐
│        WHY ₹99? THE LOKARTH VISION                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  "We didn't cut costs. We cut barriers."                │
│                                                         │
│  Lokarth's Mission is to eradicate 'Silent Hunger'      │
│  (Micronutrient Deficiency) from India. We believe      │
│  elite nutrition shouldn't be a luxury.                 │
│                                                         │
│  Our Investment:                                        │
│  We have invested in the R&D and Logistics so that      │
│  every Indian family can access Gold-Standard Ghee D₃   │
│  without breaking the bank.                             │
│                                                         │
│  [LOKARTH LOGO]                                         │
│  Serve Together. Change Forever.                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 6. Price Display Components Update

**Files to modify**:
- `src/components/PremiumPriceDisplay.tsx`
- `src/components/ProductCard.tsx`
- `src/components/StickyOrderButton.tsx`

**Language Changes**:

| Current Text | New Text |
|--------------|----------|
| "Mission Subsidy" | "Lokarth Health Subsidy" |
| "Citizen Trial" | "Lokarth Grant Allocation" |
| "Save ₹300" | "₹300 Funded by Lokarth" |
| "Mission Subsidy Applied" | "Lokarth Grant Applied" |
| "Direct-to-Consumer Pilot" | "Lokarth Health Initiative" |

---

### 7. Visual Rules Implementation (Risk Mitigation)

**Color Changes** (No red strikethroughs):
- MRP strikethrough: Use `text-muted-foreground` with gold/grey (NOT red)
- Subsidy amount: Use `text-secondary` (green) or `text-primary` (gold)
- Final price: Use `text-primary` (bold gold)

**Language Elevation**:
Replace throughout the codebase:

| Avoid | Use Instead |
|-------|-------------|
| Deal | Allocation |
| Steal | Grant |
| Cheap | Accessible |
| Offer | Initiative |
| Discount | Subsidy |
| Sale | Campaign |

---

### 8. Hero Section Updates

**File**: `src/pages/HomePage.tsx`

Update the hero badge and promotional elements:

**Current**: "Citizen Trial"
**New**: "Lokarth Health Grant"

Update Mission Note (line 147-149):
```text
Current: "Mission Subsidy: We absorb the cost..."
New: "Funded by Lokarth Foundation: Elite nutrition, accessible pricing"
```

---

### 9. Trial Badge Updates

**File**: `src/pages/WhereToBuy.tsx`

Update the Trial Pack Badge (lines 175-198):

| Current | New |
|---------|-----|
| "Citizen Trial" | "Lokarth Allocation" |
| "Save ₹300" | "₹300 Grant Applied" |
| "LIMITED ACCESS" ribbon | "HEALTH INITIATIVE" ribbon |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/assets/lokarth-logo.png` | New - Lokarth Foundation logo |
| `src/components/Header.tsx` | Add "Powered by Lokarth" badge |
| `src/components/Footer.tsx` | Add Lokarth Foundation section |
| `src/pages/HomePage.tsx` | Add "Why ₹99?" section, update hero messaging |
| `src/pages/WhereToBuy.tsx` | Update Mission Subsidy section to Lokarth branding |
| `src/components/PremiumPriceDisplay.tsx` | Update labels to Lokarth terminology |
| `src/components/ProductCard.tsx` | Update "Mission Subsidy Applied" text |
| `src/components/StickyOrderButton.tsx` | Update badge text to Lokarth branding |

---

## Technical Details

### Lokarth Badge Component
Create a reusable badge component:

```tsx
// src/components/LokarthBadge.tsx
const LokarthBadge = ({ size = 'md' }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/20">
    <img src={lokarthLogo} alt="Lokarth" className="h-4 w-auto" />
    <span className="text-xs font-medium text-primary">
      An Initiative by Lokarth
    </span>
  </div>
);
```

### Color System (No Red)
- **MRP (crossed out)**: `text-muted-foreground` with `line-through`
- **Subsidy (-₹300)**: `text-secondary` (sage green) with subtle gold accent
- **Final Price (₹99)**: `text-primary` (gold) with `font-bold`

---

## Expected Outcome

After implementation:
1. Users see Lokarth as an institutional benefactor (like Tata Trust)
2. The ₹99 price is framed as a "funded allocation," not a discount
3. Premium quality perception is maintained despite low price
4. Clear differentiation: "This is a health campaign, not a sale"
5. Institutional credibility bridges the price-trust gap

