
# Self Assessment Redesign: "SuryAmrit Safety Protocol" Recommendation Engine

## Philosophy
Replace clinical "Medical Dosages" approach with **Lifestyle Integration** messaging. The core principle: **Consistency over Intensity**. Every score level leads to a SuryAmrit recommendation - the difference is in the framing and urgency.

---

## Current State vs. New Design

### What We Have Now
- Generic medical recommendations (dosages, blood tests)
- Clinical language ("Sufficiency Status", "ng/mL levels")
- Only shows CTA for moderate/high risk users
- Bullet-point list format for recommendations

### What We Are Building
- Lifestyle-focused, action-oriented messaging
- Emotional hooks that resonate with office workers
- Product CTA for ALL score levels (different framing)
- Card-based visual hierarchy with clear sections:
  - Status Badge (emoji + label)
  - Your Action Plan (the insight)
  - The Fix (SuryAmrit positioning)
  - The Timeline/Result/Promise (45-day expectation)
  - Lifestyle Add-ons (practical tips)

---

## New Result Data Structure

### Score 0-3: Optimal Zone
```text
Status:       "Sun-Kissed & Strong"
Emoji:        Star icon
Hook:         "Lock in your levels."
Action Plan:  You are living a healthy life! But in the modern 
              world, D3 levels drop fast during stress or office weeks.
The Fix:      Take 1 SuryAmrit Ghee Softgel daily to "Lock In" 
              your status.
The Result:   Prevents future fatigue and keeps your immunity 
              shield active.
Lifestyle Tips:
  - Maintain current sun exposure
  - Keep eating healthy fats
```

### Score 4-7: Efficiency Gap
```text
Status:       "The Office Fatigue Zone"
Emoji:        AlertTriangle icon  
Hook:         "Bridge the gap."
Action Plan:  You aren't sick, but you aren't efficient either. 
              Your current lifestyle is draining your battery faster 
              than you are recharging it.
The Fix:      Start the SuryAmrit Daily Habit. It absorbs better 
              than tablets and fills this gap naturally.
Timeline:     It takes time to rebuild. Stick to it for 45 Days 
              to feel the real shift in your energy and sleep quality.
Lifestyle Tips:
  - Add 15 mins of morning sun
  - Add 1 spoon of Ghee to meals
  - Try to get 15 minutes of sunlight on your balcony
```

### Score 8-14: Silent Drain
```text
Status:       "Needs Restoration"  
Emoji:        Shield icon
Hook:         "Start the Restoration Cycle."
Action Plan:  Your inputs (Sun/Diet) are significantly lower than 
              your body's demand.
Why SuryAmrit: Instead of shocking your body with high-dose chemical 
              injections (which can be harsh), we recommend Gentle, 
              Consistent Restoration.
The Fix:      Take SuryAmrit Daily without fail. Our Ghee matrix 
              ensures steady absorption that is safe for long-term use.
The Promise:  You didn't lose your levels in a day, and you won't 
              fix them in a day. Give us 45 Days of consistency, 
              and you will see the change.
Lifestyle Tips:
  - Mandatory: 20 mins Sun daily
  - Diet: More Fatty Fish/Dairy
  - Consistency is key
```

---

## Technical Changes

### File: `src/pages/SelfAssessment.tsx`

#### 1. Update ResultData Interface (Lines 98-104)
Replace the current interface with a more comprehensive structure:

```typescript
interface ResultData {
  riskLevel: RiskLevel;
  statusEmoji: string;
  statusLabel: string;
  hook: string;
  actionPlan: string;
  theFix: string;
  whySuryAmrit?: string; // Only for high risk
  timelineOrResult: string;
  timelineLabel: string; // "The Result" | "The Timeline" | "The Promise"
  lifestyleTips: string[];
}
```

#### 2. Rewrite getResultData Function (Lines 106-153)
Replace the entire function with new content matching the three scenarios:

**Low Risk (0-3):**
- `statusLabel`: "Sun-Kissed & Strong"
- `hook`: "Lock in your levels."
- Uses Star icon styling (green)

**Moderate Risk (4-7):**
- `statusLabel`: "The Office Fatigue Zone"  
- `hook`: "Bridge the gap."
- Uses AlertTriangle icon styling (amber)

**High Risk (8-14):**
- `statusLabel`: "Needs Restoration"
- `hook`: "Start the Restoration Cycle."
- Uses Shield icon styling (red/protective)

#### 3. Add New Icons (Line 12)
Import additional icons from lucide-react:
- `Star` - for optimal zone status
- `Shield` - for restoration status
- `Sparkles` - for lifestyle tips
- `Clock` - for timeline section
- `Zap` - for "The Fix" section

#### 4. Update getRiskIcon Helper (Lines 197-206)
Change the high-risk icon from `XCircle` to `Shield` for protective framing.

#### 5. Completely Redesign Results Section (Lines 352-476)
Replace the current results layout with a new card-based design:

**New Layout Structure:**
```text
+------------------------------------------+
|  [Icon]  STATUS LABEL                    |
|          "Hook text here"                |
|  Score: X / 14 Points                    |
+------------------------------------------+

+------------------------------------------+
|  YOUR ACTION PLAN                        |
|  [Insight paragraph about their status]  |
+------------------------------------------+

+------------------------------------------+
|  THE FIX - SURYAMRIT SOLUTION           |
|  [Product positioning message]           |
|  [Why SuryAmrit - for high risk only]    |
|                                          |
|  [Order Button - always visible]         |
+------------------------------------------+

+------------------------------------------+
|  THE RESULT/TIMELINE/PROMISE (45 Days)  |
|  [Expectation-setting message]           |
+------------------------------------------+

+------------------------------------------+
|  LIFESTYLE ADD-ONS                       |
|  - Tip 1                                 |
|  - Tip 2                                 |
|  - Tip 3 (if applicable)                 |
+------------------------------------------+

+------------------------------------------+
|  SAFETY DISCLAIMER (small grey text)     |
+------------------------------------------+

[Start New Assessment Button]
```

#### 6. Remove Old Elements
- Remove the score breakdown table (simplify the experience)
- Remove the "Complete Score Interpretation Guide" table
- Remove medical terminology ("ng/mL", "Sufficiency Status")

#### 7. Always Show CTA
Move the "Order SuryAmrit" CTA inside the main results flow for ALL risk levels (not conditional). The framing changes but the action remains the same.

#### 8. Add Safety Disclaimer Card
Add a new card at the bottom with the medical disclaimer:

```text
SuryAmrit is a daily nutritional supplement to support healthy 
Vitamin D levels. It is not a prescription drug or a cure for 
acute diseases. If you have existing liver/kidney conditions or 
are on specific medication, please share this ingredient list 
with your physician before starting.
```

---

## Visual Design Updates

### Color Coding by Risk Level
| Risk | Primary Color | Background | Icon |
|------|--------------|------------|------|
| Low (0-3) | Green-600 | Green-50 | Star |
| Moderate (4-7) | Amber-600 | Amber-50 | AlertTriangle |
| High (8-14) | Primary (Gold) | Red-50 | Shield |

### Typography Hierarchy
- **Status Label**: Large, bold, with emoji prefix
- **Hook**: Italic, secondary color, motivational
- **Section Headers**: Bold, uppercase tracking
- **Body Text**: Regular weight, comfortable reading
- **Disclaimer**: Small, muted gray

### Card Styling
- Each section in its own Card component
- Subtle left border accent matching risk level color
- Consistent padding and spacing
- Smooth fade-in animations (already exists)

---

## Summary of Changes

| Element | Before | After |
|---------|--------|-------|
| Status Labels | "Low Risk", "Moderate Risk", "High Risk" | "Sun-Kissed & Strong", "The Office Fatigue Zone", "Needs Restoration" |
| Messaging | Clinical (blood tests, dosages) | Lifestyle (energy, efficiency, restoration) |
| Product CTA | Only moderate/high risk | All risk levels with different framing |
| Timeline | None | 45-day expectation for moderate/high |
| Recommendations | Bullet list of medical actions | Structured cards with The Fix + Lifestyle Tips |
| Disclaimer | Top of page only | Added safety valve at bottom of results |
| Icons | CheckCircle/AlertTriangle/XCircle | Star/AlertTriangle/Shield |
