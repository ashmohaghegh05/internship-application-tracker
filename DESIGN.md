---
colors:
  canvas: "#F4F3ED"
  surface: "#FAFAF7"
  ink: "#0B0B0C"
  graphite: "#343438"
  muted: "#74746F"
  line: "#CBCBC3"
  blue: "#2754FF"
  blue-dark: "#1735B5"
  blue-soft: "#E8EDFF"
  danger: "#B42318"
  danger-soft: "#FDECEA"
  success: "#176B46"
  success-soft: "#E8F5EE"
  white: "#FFFFFF"

typography:
  font-family: "Arial, Helvetica, sans-serif"
  hero-size: "clamp(64px, 9vw, 118px)"
  hero-line-height: "0.86"
  hero-letter-spacing: "-0.065em"
  section-heading-size: "clamp(30px, 3vw, 42px)"
  summary-number-size: "clamp(54px, 6vw, 84px)"
  application-company-size: "22px"
  body-size: "15px"
  small-size: "12px"
  label-size: "10px"

spacing:
  page-max-width: "1240px"
  desktop-gutter: "32px"
  mobile-gutter: "18px"
  section-space-large: "72px"
  section-space-medium: "46px"
  control-gap: "18px"
  row-gap: "26px"

radius:
  default: "0px"

borders:
  major: "2px solid #0B0B0C"
  standard: "1px solid #CBCBC3"
  input: "1px solid #0B0B0C"
  focus: "3px solid #2754FF"

buttons:
  primary-background: "#0B0B0C"
  primary-text: "#FFFFFF"
  primary-hover-background: "#2754FF"
  secondary-background: "transparent"
  secondary-text: "#0B0B0C"

states:
  error-color: "#B42318"
  error-background: "#FDECEA"
  success-color: "#176B46"
  success-background: "#E8F5EE"
  attention-color: "#2754FF"
---

# Overview

This page is opened by someone who wants to understand their internship search in seconds.

In the first five seconds, the user should be able to answer:

1. How many applications have I submitted?
2. How many are still active?
3. How many interviews and offers do I have?
4. Which applications need my attention?

The visual direction is **Swiss Career Dossier**.

It should feel like a carefully maintained professional record: structured, editorial, precise, confident, and unusually clear.

It should not feel like a generic productivity dashboard.

The interface takes inspiration from Swiss editorial systems: oversized typography, strict alignment, strong rules, numbered sections, asymmetric layouts, large amounts of controlled whitespace, and one concentrated accent color.

The design should feel sophisticated because of its hierarchy and restraint, not because of decoration.

## Core Design Rule

**The application progress is the answer. Nothing decorative should compete with the numbers, statuses, or application information.**

## Signature Visual Idea

The interface behaves like a living professional dossier.

Every major section has:

- A two-digit section number
- A strong horizontal rule
- A concise uppercase section title
- Consistent alignment to the same page grid

Application records are numbered:

`01`  
`02`  
`03`

This creates a visual system that feels intentional and unique without adding unnecessary graphics.

---

# Colors

## Canvas — `#F4F3ED`

Use as the main background.

This slightly warm off-white prevents the interface from feeling sterile while still giving it a professional editorial appearance.

Do not substitute pure white for the overall page background.

---

## Surface — `#FAFAF7`

Use only where a subtle difference from the canvas is useful, such as:

- Empty-state regions
- Input backgrounds
- Small information areas

The difference should remain subtle.

---

## Ink — `#0B0B0C`

The primary visual anchor.

Use for:

- Hero headline
- Main headings
- Application company names
- Important numbers
- Primary buttons
- Major borders

Ink should provide the strongest contrast on the page.

---

## Graphite — `#343438`

Use for normal body text when full black would feel too heavy.

---

## Muted — `#74746F`

Use for:

- Supporting descriptions
- Dates
- Metadata
- Help text
- Secondary labels

Muted text must remain readable.

---

## Line — `#CBCBC3`

Use for:

- Grid lines
- Dividers
- Application separators
- Secondary borders

Most structure should come from lines rather than card backgrounds.

---

## Electric Blue — `#2754FF`

This is the signature accent.

Use it selectively for:

- Total Applications summary block
- Section numbers
- Active status indicators
- Interview status
- Follow-up indicators
- Focus states
- Selected filter state
- Important interactive emphasis

Blue must feel rare enough that it always means something.

Do not use blue simply to decorate empty space.

---

## Blue Dark — `#1735B5`

Use for less dominant blue text such as confirmations or secondary highlights.

---

## Blue Soft — `#E8EDFF`

Use sparingly for a subtle selected or focused background.

Never use it for large decorative panels.

---

## Danger — `#B42318`

Use only for:

- Validation errors
- Delete confirmation
- Destructive actions

---

## Success — `#176B46`

Use for:

- Successful actions
- Reset confirmation
- Saved confirmation when needed

---

# Typography

Use only:

`Arial, Helvetica, sans-serif`

Do not import an external font.

The personality of the page comes from scale, spacing, weight, alignment, and contrast.

## Hero

The hero should feel editorial.

Use:

- Very large type
- Heavy weight
- Tight line-height
- Tight negative letter spacing
- Two or three lines maximum

Example:

> See the  
> whole search.

The hero should not contain a long paragraph.

---

## Summary Numbers

Summary numbers are one of the most important elements in the entire interface.

They should be:

- Large
- Bold
- Easy to scan
- Visually stronger than their labels

Example:

`12`

then below it:

`TOTAL APPLICATIONS`

Labels remain small and uppercase.

---

## Section Headings

Use bold headings with strong hierarchy.

Example:

`Application record`

Section headings should not compete with the hero.

---

## Small Labels

Small labels use:

- Uppercase
- Bold weight
- Wide letter spacing

Examples:

`CURRENT POSITION`

`FILTER STATUS`

`DATE APPLIED`

`FOLLOW-UP`

These labels create the dossier / editorial feeling.

---

# Grid and Alignment

Use a strict centered layout with:

`max-width: 1240px`

Desktop horizontal padding:

`32px`

Mobile horizontal padding:

`18px`

All major sections must align to the same left and right edges.

Avoid arbitrary widths.

## Desktop Grid

Think of the desktop page as a 12-column system.

The hero can divide approximately:

- 8 columns for headline and introduction
- 4 columns for a key summary statistic

The main workspace divides approximately:

- 5 columns for the application form
- 7 columns for application records

The application record area receives more space because viewing existing data is more important than entering new data.

---

# Page Structure

## 01 — Hero

First visible area:

- Product label
- Large headline
- Short supporting sentence
- Current total application count

The hero should make the tool feel purposeful immediately.

The total application count can occupy a narrow right-side column on desktop.

On mobile, place it beneath the introduction.

---

## 02 — Current Position

The calculated summary appears immediately after the hero.

Five values:

1. Total Applications
2. Active
3. Interviews
4. Offers
5. Follow-Ups

These values should visually read as one continuous horizontal information strip rather than five floating cards.

Use dividing lines between values.

### Total Applications

This is the strongest item.

Use:

- Blue background
- White text
- Large number

### Remaining Values

Use:

- Canvas background
- Ink numbers
- Muted labels

Do not use separate shadows or rounded boxes.

---

## 03 — Manage Applications

Desktop uses two columns.

### Left

Add Application form.

### Right

Application Record.

The right side should be slightly wider.

A vertical line separates the two areas.

---

## 04 — Reset

The reset action belongs at the bottom.

It should never compete with Add Application.

Include explanatory text beside or above it.

---

# Form Design

The form should feel integrated into the page rather than sitting inside a floating card.

## Labels

Use small uppercase labels.

Example:

`COMPANY`

`ROLE`

`DATE APPLIED`

---

## Inputs

Inputs should use:

- Transparent or very subtle background
- Square corners
- Bottom border or simple rectangular border
- Comfortable vertical spacing

Avoid large rounded input boxes.

---

## Focus

When focused:

- Border becomes Electric Blue
- Focus must be obvious
- Do not remove keyboard focus styling

---

## Invalid Fields

When invalid:

- Border becomes Danger red
- Error text appears directly below the relevant field or above the submit button
- Keep all existing user input

Do not use `alert()`.

Do not shake the form.

Do not turn the entire page red.

---

# Buttons

## Add Application

Primary action.

Use:

- Ink background
- White text
- Full width on the form
- Square corners
- Strong weight

Hover:

- Electric Blue background
- White text

Focus:

- Clearly visible blue outline

The button should say:

**Add Application**

not vague text such as:

**Submit**

---

## Delete

Delete is secondary and destructive.

It should be:

- Smaller
- Quieter
- Clearly labeled
- Never blue

Use Danger red only on hover or clear destructive affordance.

---

## Reset All

Use:

- Transparent background
- Ink border
- Ink text

Hover may invert to:

- Ink background
- White text

It should not visually resemble the primary Add Application button.

---

# Application Record

Do not create individual floating cards.

Each application is one structured record separated by horizontal lines.

Desktop structure:

`number | company + role + metadata | status / controls`

Example:

`01`

**Deloitte**  
Strategy Intern

`APPLIED OCT 15` `FOLLOW-UP`

`APPLIED`

---

## Company

Strongest text inside each record.

Use bold Ink.

---

## Role

Secondary.

Use Graphite or Muted.

---

## Metadata

Use small uppercase text.

Examples:

`APPLIED OCT 15`

`FOLLOW-UP`

`NO ACTION`

---

## Application Number

Use Electric Blue.

Examples:

`01`

`02`

`03`

This numbering is a signature visual element.

---

# Status System

Statuses must be recognizable without becoming oversized badges.

## Applied

- Canvas background
- Ink border
- Ink text

## Interview

- Electric Blue background
- White text

## Offer

- Ink background
- White text

## Rejected

- Transparent background
- Muted or Danger border
- Muted text

Status labels remain rectangular and compact.

No pill shapes.

---

# Follow-Up System

If an application needs attention:

Use Electric Blue text:

`FOLLOW-UP`

If it does not:

Use Muted text:

`NO ACTION`

Follow-up status should be understandable even without relying only on color.

---

# Filters

Place filters near the Application Record heading.

Use a compact select control.

The filter is useful but visually secondary.

Do not create a giant filter toolbar.

---

# Page States

Every application state must feel intentionally designed.

---

## Empty State

When there are no applications:

All summary values show:

`0`

The Application Record area displays:

### No applications yet.

Add your first internship application to begin tracking your search.

The empty area should have generous whitespace.

Do not show fake data.

Do not add illustrations simply to fill space.

The form remains usable.

---

## Invalid Input State

If the user submits incomplete information:

- Do not add the application
- Keep entered values
- Show inline error
- Keep the rest of the tracker usable

Example:

**Please complete the company, role, date, and status before adding the application.**

Use:

- Danger text
- Optional pale danger background
- Strong readability

Do not use an alert popup.

---

## In-Use State

When applications exist:

- Summary numbers update
- Application records render
- Status controls appear
- Filters work
- Follow-up state is visible
- Delete actions are available

The page should redraw from JavaScript state.

---

## Filtered State

When the user selects a filter:

The summary numbers continue to represent the entire dataset.

Only the application list changes.

If the filter returns no applications:

Display:

**No applications match this status.**

Do not display the general empty-state message.

---

## After Reset State

After Reset All:

- State becomes empty
- `localStorage` is cleared
- Summary returns to zero
- Application records disappear
- Empty state returns

Display confirmation:

**Tracker cleared. You can start again whenever you're ready.**

Use success styling.

---

# Motion

Motion should be minimal.

Allowed:

- Fast button hover
- Border-color transitions
- Subtle opacity change when content updates

Target duration:

`120ms–180ms`

Do not use:

- Page entrance animations
- Floating elements
- Large transitions
- Animated gradients
- Bouncing cards
- Count-up animations

The tracker should feel fast and stable.

---

# Elevation and Depth

No drop shadows.

No glass panels.

No floating cards.

No gradients.

Depth comes from:

- Typography
- Rules
- Grid structure
- Blue accent
- Spacing
- Contrast

The page should look designed even if printed in black and white.

---

# Shapes

Default radius:

`0px`

The design intentionally avoids rounded UI everywhere.

Do not use:

- Pills
- Large rounded cards
- Bubble-shaped buttons
- Floating capsules

Rectangles and lines create the visual character.

---

# Responsive Behavior

## Desktop

Show:

- Hero split layout
- Five-column summary strip
- Two-column workspace
- Compact application records

---

## Tablet

The summary may wrap to two columns if needed.

The workspace can become one column when necessary.

---

## Mobile

Order:

1. Hero
2. Total applications statistic
3. Summary values
4. Add Application form
5. Filter
6. Application Record
7. Reset All

All form controls become full width.

Application records stack vertically.

Status controls move underneath the application metadata when necessary.

No horizontal scrolling.

The user must be able to understand their progress before scrolling past the first major section.

---

# Accessibility

Maintain strong contrast.

Every form field must have a visible `<label>`.

Do not use placeholder text as the only label.

Keyboard focus must always remain visible.

Statuses must contain text rather than communicating only through color.

Error messages should clearly explain how to fix the problem.

Buttons must use descriptive text.

---

# Do's

- Make the calculated progress visually dominant
- Use section numbers consistently
- Use a strict grid
- Use horizontal lines instead of cards
- Give application data generous space
- Use blue only when something deserves attention
- Keep every interactive state clear
- Make company names easy to scan
- Keep destructive actions visually secondary
- Preserve strong keyboard focus
- Let whitespace create sophistication
- Make the mobile version feel intentional
- Prefer meaningful information over decoration

---

# Don'ts

- Do not use gradients
- Do not use glassmorphism
- Do not use drop shadows
- Do not use decorative blobs
- Do not use stock illustrations
- Do not use giant icons
- Do not use unnecessary icons beside text
- Do not use pill-shaped badges
- Do not round every component
- Do not use more than one accent color
- Do not add external fonts
- Do not create a generic card dashboard
- Do not animate numbers
- Do not make the form more visually dominant than the progress
- Do not hide useful information behind hover
- Do not make reset or delete look like primary actions
- Do not add decoration simply because space is available

---

# Final Visual Test

Before considering the interface finished, ask:

1. Can I understand my internship progress in five seconds?
2. Is the calculated output more noticeable than the input form?
3. Can I quickly find an application?
4. Is follow-up attention obvious?
5. Does the page still feel professional without shadows, gradients, or illustrations?
6. Does every section align to the same grid?
7. Does Electric Blue always mean something?
8. Does the mobile layout preserve the same information hierarchy?

If any answer is no, the design is not finished.
