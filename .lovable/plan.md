
# Mission Subsidy Explained Card Implementation

## Overview
Add a visually striking "Mission Subsidy Explained" card to the `/buy` page that tells the compelling story of why SuryAmrit subsidizes its premium product. This card will reinforce the "Premium + Social Cause" narrative and help close the "Price-Trust Gap."

---

## Placement Strategy

The card will be positioned **immediately after the Compact Trust Bar** (line 249) and **before the Additional Products Section**. This strategic placement ensures:

- Users see the explanation right after viewing the product and trust indicators
- It reinforces the value narrative before they scroll to additional products
- It's visible just below the initial purchase section

---

## Card Design

### Visual Treatment
- **Background**: Subtle gradient with gold/amber tones matching the premium brand aesthetic
- **Border**: Gold accent border with soft shadow
- **Icon**: Sun or heart icon representing the mission
- **Typography**: Serif heading (Playfair Display) for premium feel

### Content Structure

```text
+--------------------------------------------------+
|  ☀️  Our Mission Subsidy                          |
|--------------------------------------------------+
|  "Why Does Premium Cost So Little?"              |
|                                                  |
|  SuryAmrit is crafted with pure A2 Ghee and      |
|  authentic Ayurvedic formulation - ingredients   |
|  that cost us ₹350+ per unit.                    |
|                                                  |
|  But India's Vitamin D crisis affects 80% of     |
|  our population. We believe health shouldn't     |
|  be a luxury.                                    |
|                                                  |
|  So we absorb most of the cost ourselves.        |
|                                                  |
|  [MRP ₹399] → [Our Subsidy ₹300] → [You Pay ₹99] |
|                                                  |
|  This is not a discount. It's our commitment     |
|  to making premium health accessible.            |
|                                                  |
|  "Direct-to-Consumer Pilot Program"              |
+--------------------------------------------------+
```

### Key Messaging Points
1. **Acknowledge the question**: "Why does premium cost so little?"
2. **Establish true value**: Mention the real cost of ingredients (₹350+)
3. **Present the social cause**: India's Vitamin D crisis (80% deficient)
4. **Explain the subsidy model**: We absorb the cost
5. **Differentiate from discounts**: "This is not a discount. It's a commitment."

---

## Technical Implementation

### File to Modify
- `src/pages/WhereToBuy.tsx`

### Changes
1. Add new imports if needed (Heart or Sun icon from lucide-react)
2. Insert new section after line 249 (after Compact Trust Bar section closing tag)
3. Create a visually distinct card with the mission story

### Component Structure
```tsx
{/* Mission Subsidy Explained Section */}
<section className="py-10 bg-gradient-to-b from-primary/5 to-background">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <Card className="border-2 border-primary/30 shadow-golden overflow-hidden">
        {/* Header with icon */}
        <div className="bg-gradient-to-r from-primary/10 to-amber-100/50 px-6 py-4">
          <div className="flex items-center gap-3">
            <Sun icon />
            <h3>Our Mission Subsidy</h3>
          </div>
        </div>
        
        <CardContent>
          {/* Story content */}
          {/* Price breakdown visualization */}
          {/* Mission statement */}
        </CardContent>
      </Card>
    </div>
  </div>
</section>
```

---

## Files to Edit

| File | Changes |
|------|---------|
| `src/pages/WhereToBuy.tsx` | Add Mission Subsidy Explained section after Trust Bar |

---

## Expected Outcome

After implementation:
1. Users will understand the ₹99 price is a **subsidized premium product**, not a cheap one
2. The social mission story creates emotional connection and trust
3. The price breakdown visualization reinforces the value anchor (₹399 MRP)
4. The card maintains the clinical/premium aesthetic with gold accents
5. Clear differentiation: "This is a commitment, not a discount"
