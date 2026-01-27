
# Add "30-Day Promise" Image Gallery to Shop Page

## Overview
Create 3 AI-generated images featuring a perfectly round, sun-like glowing spherical pill for the Shop page (`/buy`). These images will support three distinct "30-Day Promise" value propositions. The images will be generated using the Nano banana AI model and stored in the assets folder.

---

## Image Specifications

### Common Requirements for All 3 Images
- **Pill Shape**: Perfect spherical/round ball like the sun or Earth (NOT capsule-shaped)
- **Pill Color**: Golden/amber with warm glow
- **High Quality**: Premium, clinical aesthetic

---

### Image 1: "The Golden Standard" Promise
**Focus**: Logic/Education - Ghee advantage

**Visual Prompt**:
> A macro close-up photograph of a perfect spherical golden pill glowing with warm amber light, positioned against a deep navy/charcoal premium dark background. The sphere should look like a miniature sun with soft golden glow radiating outward. Include a subtle stylized sun icon merging with a drop of ghee in the composition. Ultra high-definition, professional product photography, clinical aesthetic, dramatic lighting.

**Dimensions**: 1024x1024 (will crop to wide format)

---

### Image 2: "The Honest Absorption" Promise
**Focus**: Science - Anti-chemist narrative

**Visual Prompt**:
> A split-screen comparison image. Left side: grayscale image of a crumbling dry white tablet disintegrating (representing old technology). Right side: vibrant high-definition image of a perfect spherical golden glowing pill like a small sun, smooth and pristine (representing SuryAmrit). The contrast between the two sides should be dramatic. Professional product photography, scientific aesthetic.

**Dimensions**: 1024x1024

---

### Image 3: "The Sunlight Inside" Promise
**Focus**: Lifestyle - Holistic/Ayurvedic audience

**Visual Prompt**:
> A perfect spherical golden pill resembling a miniature sun with warm amber glow, bathed in beautiful sunlight with lens flares and golden hour lighting effects. Background features organic woven fabric texture with subtle leaf patterns. The sphere radiates warmth like captured sunlight. Natural, premium, vegetarian aesthetic. Professional photography with dreamy sunlit atmosphere.

**Dimensions**: 1024x1024

---

## Implementation Plan

### Step 1: Generate Images
Use the Nano banana AI image generation API to create 3 images:
- `golden-standard-promise.webp`
- `honest-absorption-promise.webp`
- `sunlight-inside-promise.webp`

### Step 2: Store Images
Save generated images to `src/assets/`

### Step 3: Create Promise Cards Section
Add a new section to `src/pages/WhereToBuy.tsx` after the Mission Subsidy section:

```text
+--------------------------------------------------+
|          OUR 30-DAY PROMISES                     |
+--------------------------------------------------+
|  [Image 1]    |  [Image 2]    |  [Image 3]       |
|  Golden       |  Honest       |  Sunlight        |
|  Standard     |  Absorption   |  Inside          |
|               |               |                  |
|  "30 Days to  |  "The No-Burp |  "Your Daily     |
|  Fall in Love |  30-Day       |  Ray of Sun,     |
|  with the     |  Guarantee"   |  Guaranteed"     |
|  Habit"       |               |                  |
|               |               |                  |
|  [Copy...]    |  [Copy...]    |  [Copy...]       |
+--------------------------------------------------+
```

### Card Structure
Each card will include:
- Generated image at the top
- Guarantee title (bold, serif font)
- Descriptive copy
- Visual badges/icons as appropriate

---

## Technical Details

### Files to Create
| File | Purpose |
|------|---------|
| `src/assets/golden-standard-promise.webp` | Image 1 - Dark background, golden sphere |
| `src/assets/honest-absorption-promise.webp` | Image 2 - Split comparison |
| `src/assets/sunlight-inside-promise.webp` | Image 3 - Sunlit atmosphere |

### Files to Modify
| File | Changes |
|------|---------|
| `src/pages/WhereToBuy.tsx` | Add new "30-Day Promises" section with 3 cards |

### Section Placement
The new section will be inserted after the Mission Subsidy Explained section (line ~327) and before the Additional Products section.

---

## Expected Outcome

After implementation:
1. Three visually stunning AI-generated images featuring perfectly spherical sun-like golden pills
2. A new "30-Day Promises" section showcasing three different value propositions
3. Each card tells a compelling story with premium visual treatment
4. Reinforces the premium quality narrative with clinical/natural aesthetic
5. All pills are round spheres (like the sun) - not capsule-shaped
