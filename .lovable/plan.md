
# Footer Restructure: Professional Layout with Regulatory Information

## Overview
Restructure the footer to accommodate new manufacturer and marketer details while maintaining the existing brand elements. The new design will be a 5-column layout on desktop, collapsing to a clean mobile-responsive format.

---

## Current State Analysis

**File**: `src/components/Footer.tsx`

**Current Structure (4 columns)**:
1. **Company Info** - Logo, tagline, social links
2. **Quick Links** - Navigation links (Shop, Science, Reviews, etc.)
3. **Product Information** - Feature checklist
4. **Our Benefactor** - Lokarth Foundation card + contact info

---

## New Information to Add

### Manufactured By
```text
GELNOVA LABORATORIES (INDIA) PVT. LTD.
C-125, TTC Industrial Area,
Mahape, Navi Mumbai,
Maharashtra, 400 703 INDIA
FSSAI Lic. No. 10013022002314
```

### Marketed By
```text
LOKPEETH FOUNDATION
1774, Block B1, Vasant Kunj,
New Delhi - 110070 INDIA
Customer Care: 9373228844
FSSAI Lic. No. 21525083005916
info@suryamrit.org
www.suryamrit.org
```

---

## Proposed New Structure

### Layout: 5-Column Grid (Desktop) → Responsive Stack (Mobile)

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│                              MAIN FOOTER CONTENT                              │
├──────────────┬──────────────┬──────────────┬──────────────┬──────────────────┤
│   COLUMN 1   │   COLUMN 2   │   COLUMN 3   │   COLUMN 4   │     COLUMN 5     │
│              │              │              │              │                  │
│  SURYAMRIT   │ QUICK LINKS  │   SUPPORT    │ MANUFACTURED │   MARKETED BY    │
│    BRAND     │              │              │      BY      │                  │
│              │ • Shop       │ • FAQ        │              │ LOKPEETH         │
│  [Logo]      │ • Product    │ • Contact    │ GELNOVA      │ FOUNDATION       │
│  Tagline     │ • Science    │ • Partners   │ LABORATORIES │                  │
│              │ • About      │ • Self       │              │ [Address]        │
│  [Social     │ • Endorse-   │   Assessment │ [Address]    │ [Phone]          │
│   Icons]     │   ments      │              │ [FSSAI]      │ [Email]          │
│              │              │              │              │ [Website]        │
│              │              │              │              │ [FSSAI]          │
├──────────────┴──────────────┴──────────────┴──────────────┴──────────────────┤
│                              BOTTOM BAR                                       │
│  © 2026 SuryAmrit™ | FSSAI Health Supplement                [Research Quote] │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Detailed Implementation

### Column 1: Brand (Unchanged)
- SuryAmrit logo
- Tagline: "Natural Daily D₃ with Ghee..."
- Social media icons (Facebook, Twitter, Instagram, YouTube)

### Column 2: Quick Links (Updated)
Reorganized navigation links:
- Shop (`/buy`)
- Product (`/product`)
- Science (`/product#science`)
- About Us (`/about`)
- Endorsements (`/endorsements`)

### Column 3: Support (New Section)
Customer-focused links:
- FAQ (`/faq`)
- Self Assessment (`/self-assessment`)
- Become a Partner (`/partners`)
- Contact Us (scroll to contact section or WhatsApp)

### Column 4: Manufactured By (New)
```text
Header: "Manufactured By"
Icon: Factory/Building icon

GELNOVA LABORATORIES (INDIA) PVT. LTD.
C-125, TTC Industrial Area,
Mahape, Navi Mumbai,
Maharashtra, 400 703 INDIA

FSSAI Lic. No. 10013022002314
```
- Small text, professional appearance
- FSSAI badge/icon for trust

### Column 5: Marketed By (New - Replaces Lokarth Card)
```text
Header: "Marketed By"
Icon: Building/Store icon

LOKPEETH FOUNDATION
1774, Block B1, Vasant Kunj,
New Delhi - 110070 INDIA

📞 Customer Care: 9373228844
📧 info@suryamrit.org
🌐 www.suryamrit.org

FSSAI Lic. No. 21525083005916
```
- Clickable phone number (tel: link)
- Clickable email (mailto: link)
- Clickable website (external link)

---

## Technical Changes

### File: `src/components/Footer.tsx`

#### Step 1: Add New Icons
Import additional icons from lucide-react:
- `Building2` for manufacturer
- `Store` or `Building` for marketer
- `Globe` for website link
- `ExternalLink` for external links

#### Step 2: Update Grid Layout
Change from `md:grid-cols-4` to `lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2`

#### Step 3: Column 1 - Brand Section
- Keep existing logo and tagline
- Keep social media icons
- Remove the Lokarth Foundation card (moved to bottom or removed)

#### Step 4: Column 2 - Quick Links
Update links:
```jsx
<ul>
  <li><Link to="/buy">Shop</Link></li>
  <li><Link to="/product">Product</Link></li>
  <li><Link to="/product#science">Science</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/endorsements">Endorsements</Link></li>
</ul>
```

#### Step 5: Column 3 - Support Section (New)
```jsx
<div>
  <h4>Support</h4>
  <ul>
    <li><Link to="/faq">FAQ</Link></li>
    <li><Link to="/self-assessment">Self Assessment</Link></li>
    <li><Link to="/partners">Become a Partner</Link></li>
    <li><a href="tel:9373228844">Contact Us</a></li>
  </ul>
</div>
```

#### Step 6: Column 4 - Manufactured By (New)
```jsx
<div>
  <h4 className="flex items-center gap-2">
    <Building2 className="h-4 w-4" />
    Manufactured By
  </h4>
  <div className="text-sm text-white/70 space-y-1">
    <p className="font-semibold text-white/90">
      GELNOVA LABORATORIES (INDIA) PVT. LTD.
    </p>
    <p>C-125, TTC Industrial Area,</p>
    <p>Mahape, Navi Mumbai,</p>
    <p>Maharashtra, 400 703 INDIA</p>
    <p className="text-xs mt-2 text-primary-glow">
      FSSAI Lic. No. 10013022002314
    </p>
  </div>
</div>
```

#### Step 7: Column 5 - Marketed By (New)
```jsx
<div>
  <h4 className="flex items-center gap-2">
    <Store className="h-4 w-4" />
    Marketed By
  </h4>
  <div className="text-sm text-white/70 space-y-1">
    <p className="font-semibold text-white/90">LOKPEETH FOUNDATION</p>
    <p>1774, Block B1, Vasant Kunj,</p>
    <p>New Delhi - 110070 INDIA</p>
    <div className="mt-3 space-y-2">
      <a href="tel:9373228844" className="flex items-center gap-2 hover:text-primary-glow">
        <Phone className="h-3 w-3" /> 9373228844
      </a>
      <a href="mailto:info@suryamrit.org" className="flex items-center gap-2 hover:text-primary-glow">
        <Mail className="h-3 w-3" /> info@suryamrit.org
      </a>
      <a href="https://www.suryamrit.org" target="_blank" className="flex items-center gap-2 hover:text-primary-glow">
        <Globe className="h-3 w-3" /> www.suryamrit.org
      </a>
    </div>
    <p className="text-xs mt-2 text-primary-glow">
      FSSAI Lic. No. 21525083005916
    </p>
  </div>
</div>
```

#### Step 8: Remove Old Sections
- Remove "Product Information" checklist column (redundant, available on product page)
- Remove "Our Benefactor" Lokarth card (Lokpeeth Foundation now in Marketed By)

#### Step 9: Update Bottom Bar
Keep the existing bottom section with copyright and research quote.

---

## Visual Design Notes

### Typography Hierarchy
- **Column Headers**: `text-lg font-bold mb-4` with icon
- **Company Names**: `font-semibold text-white/90`
- **Address Lines**: `text-sm text-white/70`
- **FSSAI Numbers**: `text-xs text-primary-glow` (gold accent for trust)

### Responsive Behavior
```css
/* Grid classes */
grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
```
- **Mobile (< 640px)**: Single column stack
- **Tablet (640-768px)**: 2 columns
- **Small Desktop (768-1024px)**: 3 columns
- **Large Desktop (> 1024px)**: 5 columns

### Spacing
- `gap-8` between columns
- `mb-12` before bottom bar
- Consistent `space-y-3` for list items

---

## Summary of Changes

| Section | Before | After |
|---------|--------|-------|
| Column 1 | Company Info + Social | Brand + Social (unchanged) |
| Column 2 | Quick Links (6 items) | Quick Links (5 items, reorganized) |
| Column 3 | Product Information | Support (new navigation section) |
| Column 4 | Our Benefactor (Lokarth) | Manufactured By (Gelnova) |
| Column 5 | N/A | Marketed By (Lokpeeth Foundation) |
| Grid | 4 columns | 5 columns (responsive) |

