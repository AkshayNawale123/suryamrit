

# Mission Roadmap Redesign: "Available Across India" Section

## Overview
Transform the current "Availability" section into a strategic "Mission Roadmap" that positions the Pune-only delivery as an intentional Phase 1 launch rather than a limitation. This creates a "Velvet Rope" effect where users in other cities perceive exclusivity and demand.

---

## Current State Analysis

**Location**: `src/pages/WhereToBuy.tsx` (Lines 551-646)

**Current Structure**:
- Section header: "Available Across India"
- Left column (2/3): Card with 33 cities in a grid, all styled equally
- Right column (1/3): Three sidebar cards:
  1. "Need Help?" - Generic support card
  2. "Special Offer" - Generic free delivery offer
  3. "100% Authentic" - Trust badge

---

## Redesign Implementation

### 1. Header & Sub-Header Update

**Current**:
```text
"Available Across India"
"We deliver to 500+ cities across all states and union territories"
```

**New**:
```text
"Mission Roadmap: Phase 1 Active"
"We are rolling out the 'Vitamin Efficient India' mission one city at a time. Currently exclusive to Pune & PCMC."
```

**Visual Enhancement**:
- Add a `Badge` component showing "PHASE 1" in mission green (#2C5F2D)
- Include a subtle roadmap/milestone icon

---

### 2. City Grid Redesign: "Live vs. Upcoming"

**Data Structure Update**:
```typescript
const cities = [
  { name: "Pune", status: "live", label: "LIVE NOW" },
  { name: "Pimpri-Chinchwad", status: "live", label: "LIVE NOW" },
  { name: "Mumbai", status: "phase2", label: "Launching Phase 2" },
  { name: "Bangalore", status: "phase2", label: "Launching Phase 2" },
  { name: "Delhi", status: "waitlist", label: "Waitlist Open" },
  { name: "Hyderabad", status: "waitlist", label: "Waitlist Open" },
  // ... remaining cities as "upcoming"
];
```

**Visual Styling by Status**:

| Status | Indicator | Text Style | Opacity | Badge |
|--------|-----------|------------|---------|-------|
| `live` | Green circle (#2C5F2D) | Bold, full color | 100% | "LIVE" badge in green |
| `phase2` | Amber circle | Medium weight | 70% | "PHASE 2" text |
| `waitlist` | Blue circle | Normal | 60% | "WAITLIST" text |
| `upcoming` | Grey circle (#A0AEC0) | Light | 50% | None |

**Card Title Update**:
- From: "Major Cities We Serve"
- To: "Mission Expansion Map"

---

### 3. Sidebar Cards Redesign

#### Sidebar 1: "Pune Pilot Support" (Replaces "Need Help?")

```text
Title: Pune Pilot Support
Icon: Headset/Support icon in mission green

Content:
- Phone: 1800-123-4567
- Available: "Mon-Sat, 9 AM - 8 PM (Local Pune Team)"

Button: "Chat with Pune HQ" (WhatsApp link)
```

**Styling**:
- Border accent in mission green (#2C5F2D)
- "Local Pune Team" in green text for emphasis

---

#### Sidebar 2: "Pune Citizen Privilege" (Replaces "Special Offer")

```text
Title: Pune Citizen Privilege
Subtitle: 🎖️ Pilot City Benefits

Content:
"As a Pilot City resident, you are eligible for the Lokarth Subsidy and Priority Delivery."

Highlight:
"✓ Free Delivery across Pune & PCMC on all orders"

Button: "Check My Pincode" or "Order Now"
```

**Styling**:
- Keep the golden gradient background (bg-gradient-primary)
- Add a subtle badge/ribbon saying "PILOT CITY"
- Use gold and white color scheme

---

#### Sidebar 3: Keep "100% Authentic" Card

- No changes needed - this trust badge is universal and relevant

---

### 4. Bottom Section Update

**Current**:
```text
"Don't see your city? Don't worry! We deliver to most pin codes across India. Check availability during checkout."
```

**New**:
```text
"🚀 Phase 2 Coming Soon

Not in Pune yet? Join the waitlist for your city and be the first to know when we launch the Lokarth Health Initiative in your area."

[Join Waitlist] button
```

---

## Technical Implementation

### File: `src/pages/WhereToBuy.tsx`

#### Step 1: Update City Data Structure (Lines 137-171)

Replace the simple string array with an array of objects containing status information.

#### Step 2: Redesign Section Header (Lines 555-560)

- Update h2 text to "Mission Roadmap: Phase 1 Active"
- Update paragraph to new subheading
- Add "PHASE 1" badge component

#### Step 3: Refactor City Grid (Lines 572-581)

- Implement conditional styling based on city status
- Add status badges for live cities
- Apply opacity classes for non-live cities

#### Step 4: Update Sidebar Cards (Lines 593-641)

- Redesign "Need Help?" card to "Pune Pilot Support"
- Redesign "Special Offer" card to "Pune Citizen Privilege"
- Keep "100% Authentic" card unchanged

#### Step 5: Update Bottom Message (Lines 583-588)

- Change messaging to waitlist/coming soon narrative
- Add waitlist CTA button

---

## Visual Summary

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   [PHASE 1 Badge]  MISSION ROADMAP: PHASE 1 ACTIVE                     │
│   Rolling out 'Vitamin Efficient India' one city at a time.            │
│   Currently exclusive to Pune & PCMC.                                  │
│                                                                         │
├────────────────────────────────────────────┬────────────────────────────┤
│                                            │                            │
│   🗺️ MISSION EXPANSION MAP                │   PUNE PILOT SUPPORT       │
│                                            │   ────────────────         │
│   ┌─────────────────────────────────────┐  │   📞 1800-123-4567         │
│   │ 🟢 Pune          LIVE              │  │   Local Pune Team          │
│   │ 🟢 Pimpri-Chinchwad  LIVE          │  │                            │
│   │ ⏳ Mumbai        Phase 2 (50% opacity)│  │   [Chat with Pune HQ]     │
│   │ ⏳ Bangalore     Phase 2 (50% opacity)│  ├────────────────────────────┤
│   │ 🔵 Delhi         Waitlist (60%)     │  │                            │
│   │ 🔵 Hyderabad     Waitlist (60%)     │  │   ✨ PUNE CITIZEN          │
│   │ ⚪ Chennai       (40% opacity)       │  │      PRIVILEGE             │
│   │ ⚪ Kolkata       (40% opacity)       │  │                            │
│   │ ⚪ ...           (40% opacity)       │  │   Pilot City Benefits:     │
│   └─────────────────────────────────────┘  │   • Lokarth Subsidy         │
│                                            │   • Priority Delivery       │
│   🚀 Phase 2 Coming Soon!                  │   • Free Delivery           │
│   Join waitlist for your city              │                            │
│   [Join Waitlist Button]                   │   [Check My Pincode]       │
│                                            │                            │
└────────────────────────────────────────────┴────────────────────────────┘
```

---

## Color Reference

| Element | Color | Hex |
|---------|-------|-----|
| Live Status Indicator | Mission Green | `#2C5F2D` |
| Phase 2 Indicator | Amber | Tailwind `amber-500` |
| Waitlist Indicator | Blue | Tailwind `blue-500` |
| Upcoming Indicator | Grey | `#A0AEC0` |
| Pilot Badge Background | Gold Gradient | `bg-gradient-primary` |

