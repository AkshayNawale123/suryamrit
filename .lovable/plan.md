

# Lokarth Alliance Partner Portal Implementation

## Overview
Create a unified Partner Portal at `/partners` that serves as the registration gateway for both Doctors and Distributors. The page features a "Smart Form" with conditional logic based on partner type selection, WhatsApp fast-track integration, and a manual approval workflow to protect wholesale pricing.

---

## Design Specifications

**Color Palette**: Clinical, Professional, Exclusive
- Primary: White background
- Accent: Navy Blue (for professional feel) and Gold (for premium branding)
- Existing brand colors from SuryAmrit will be incorporated

**Typography**: 
- Headlines: Playfair Display (existing serif font)
- Body: Inter (existing sans font)

---

## Page Architecture

```text
+----------------------------------------------------------+
|  HEADER: SuryAmrit Logo + "An Initiative by Lokarth"     |
+----------------------------------------------------------+
|                                                          |
|  HERO SECTION (Full Width)                               |
|  "Partner in the Fight Against Silent Hunger."           |
|  Sub: Join the Lokarth Mission...                        |
|  [Split Hero Image: Doctor + Clinical Cartons]           |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  TWO-COLUMN LAYOUT                                       |
|  +-------------------------+  +------------------------+ |
|  | LEFT: VALUE PROPOSITION |  | RIGHT: SMART FORM      | |
|  |                         |  |                        | |
|  | The SuryAmrit Advantage |  | [Login] / [Register]   | |
|  |                         |  |                        | |
|  | FOR DOCTORS:            |  | Name                   | |
|  | * Better Compliance     |  | Mobile (WhatsApp)      | |
|  | * Mission Aligned       |  | "I am joining as..."   | |
|  | * Clinical Packs        |  |   [ ] Doctor/Clinic    | |
|  |                         |  |   [ ] Distributor      | |
|  | FOR PARTNERS:           |  |                        | |
|  | * Zero Friction         |  | [Conditional Field]    | |
|  | * High Velocity         |  | - Medical Reg No.  OR  | |
|  | * Territory Protection  |  | - GST Number/Territory | |
|  |                         |  |                        | |
|  |                         |  | [Submit]               | |
|  |                         |  |                        | |
|  |                         |  | "Register to unlock    | |
|  |                         |  |  Wholesale Pricing..." | |
|  +-------------------------+  +------------------------+ |
|                                                          |
+----------------------------------------------------------+
|  FLOATING WHATSAPP BUTTON                                |
|  "Need Instant Access? Chat with our B2B Manager."       |
+----------------------------------------------------------+
|  FOOTER                                                  |
+----------------------------------------------------------+
```

---

## Technical Implementation

### 1. Supabase Setup (Database)

**New Table: `partner_applications`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `name` | text | Partner's full name |
| `phone` | text | WhatsApp-enabled mobile number |
| `partner_type` | enum | 'doctor' or 'distributor' |
| `registration_number` | text | Medical Reg No. (for doctors) |
| `clinic_name` | text | Clinic name (for doctors) |
| `gst_number` | text | GST number (for distributors) |
| `territory` | text | Territory/region (for distributors) |
| `status` | enum | 'pending', 'approved', 'rejected' |
| `created_at` | timestamptz | Submission timestamp |
| `updated_at` | timestamptz | Last update timestamp |
| `approved_at` | timestamptz | Approval timestamp |
| `approved_by` | text | Admin who approved |
| `notes` | text | Internal notes |

**RLS Policies:**
- Users can insert their own applications (public insert)
- Only authenticated admins can view/update applications

### 2. Files to Create

| File | Purpose |
|------|---------|
| `src/pages/Partners.tsx` | Main Partner Portal page |
| `src/lib/supabase.ts` | Supabase client configuration |
| `src/components/PartnerForm.tsx` | Smart registration form component |
| `src/components/WhatsAppFloatingButton.tsx` | Floating WhatsApp CTA |

### 3. Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Add `/partners` route |
| `src/components/Header.tsx` | Optionally add "Partners" link in navigation |
| `src/components/Footer.tsx` | Add "Become a Partner" link |

---

## Smart Form Logic

### Conditional Field Display

```text
Partner Type Selection:
  |
  +-- "Doctor / Clinic" selected:
  |     Show: "Medical Registration No. / Clinic Name" input
  |
  +-- "Distributor / Stockist" selected:
        Show: "GST Number / Territory" input
```

### Form Validation (using Zod)

- Name: Required, min 2 characters, max 100
- Phone: Required, valid Indian mobile format (10 digits)
- Partner Type: Required
- Conditional fields: Required based on selection

### Submission Flow

1. User fills form and submits
2. Form validates client-side with Zod
3. Data is inserted into `partner_applications` table with status = 'pending'
4. User sees "Pending Approval" confirmation message
5. Admin manually verifies credentials
6. Admin updates status to 'approved' or 'rejected'
7. Approved partners receive WhatsApp/Email notification

---

## WhatsApp Integration

**Pre-filled Message Link:**
```
https://wa.me/918001234567?text=I%20am%20a%20Doctor%2FPartner%20interested%20in%20bulk%20buying.%20Please%20share%20details.
```

**Floating Button Placement:**
- Position: Bottom-right corner
- Style: Green WhatsApp branded button
- Animation: Subtle pulse to draw attention

---

## Hero Section Image

**Split Image Concept:**
- Left side: Doctor handing a strip to a patient (clinical setting)
- Right side: Stack of 66-Strip Clinical Cartons (product focus)
- Generated using AI image generation or placeholder with text overlay

---

## Detailed Component Structure

### Partners.tsx Page Structure

```text
<Partners>
  <Header />
  <HeroSection>
    - Badge: "Lokarth Alliance"
    - Headline: "Partner in the Fight Against Silent Hunger."
    - Sub-headline
    - Split hero image
  </HeroSection>
  
  <MainContent className="two-column">
    <LeftColumn>
      <ValueProposition>
        - "The SuryAmrit Advantage" heading
        - For Doctors section (3 benefits with checkmarks)
        - For Partners section (3 benefits with checkmarks)
      </ValueProposition>
    </LeftColumn>
    
    <RightColumn>
      <PartnerForm>
        - Login/Register toggle
        - Form fields with conditional logic
        - Submit button
        - Teaser text
      </PartnerForm>
    </RightColumn>
  </MainContent>
  
  <WhatsAppFloatingButton />
  <Footer />
</Partners>
```

---

## Security Considerations

1. **No Auto-Approval**: All registrations start with 'pending' status
2. **Input Validation**: Client-side (Zod) + Server-side (RLS policies)
3. **Protected Pricing**: Wholesale prices only visible after manual approval
4. **Phone Number Encoding**: Properly encode WhatsApp pre-filled messages

---

## Pending Approval UI

After form submission, display:

```text
+------------------------------------------+
|  [Checkmark Icon]                        |
|                                          |
|  Thank you, [Name]!                      |
|                                          |
|  Your Partner Application is             |
|  Under Review                            |
|                                          |
|  Our team will verify your credentials   |
|  and activate your wholesale account     |
|  within 2 hours.                         |
|                                          |
|  [WhatsApp: Get Faster Approval]         |
|                                          |
+------------------------------------------+
```

---

## Implementation Steps

1. **Enable Supabase** - Connect Lovable Cloud backend for database
2. **Create Database Tables** - Set up `partner_applications` table with proper schema
3. **Create Supabase Client** - Set up `src/lib/supabase.ts`
4. **Build Form Component** - Create `PartnerForm.tsx` with conditional logic
5. **Build WhatsApp Button** - Create floating CTA component
6. **Build Partners Page** - Assemble full page with hero, content, and form
7. **Add Routing** - Register `/partners` route in App.tsx
8. **Add Navigation Links** - Update Header/Footer with Partner link
9. **Generate Hero Image** - Create split hero image for the page

---

## Expected Outcome

1. Professional Partner Portal at `/partners` matching brand aesthetics
2. Smart registration form with conditional fields for Doctors vs Distributors
3. All applications stored in Supabase with 'pending' status
4. WhatsApp fast-track option for high-value leads
5. Clear "Pending Approval" feedback to set expectations
6. Secure workflow protecting wholesale pricing until manual verification

