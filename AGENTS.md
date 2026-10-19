# Agent Instructions

## Project

This repository contains Mini Project 2: an Internship Application Tracker.

The tool helps me remember internship applications and understand my progress through calculated summaries, status tracking, filters, and follow-up information.

Before changing anything, read:

1. `PROPOSAL.md`
2. `PRD.md`
3. `DESIGN.md`

These files define what the project should do and how it should look.

---

## Design Rules

Follow `DESIGN.md`.

If you need a color, font, spacing value, size, radius, or component style that is not defined in `DESIGN.md`, stop and tell me instead of inventing one.

The final visual direction is:

**Swiss Career Dossier**

Main design rule:

> The application progress is the answer. Nothing decorative should compete with the summary numbers or application information.

Do not redesign the project into a generic dashboard.

---

## Technology Rules

Use only:

- HTML
- CSS
- Vanilla JavaScript

Do not use:

- React
- Vue
- Angular
- Tailwind
- Bootstrap
- jQuery
- External JavaScript libraries
- CDN libraries
- APIs
- Databases
- Servers
- Backend code

Everything must run directly in the browser.

---

## Expected Files

Keep the project simple.

```text
index.html
style.css
script.js
PROPOSAL.md
PRD.md
DESIGN.md
AGENTS.md
README.md
```

Do not create unnecessary files or folders.

---

## JavaScript State

The main application state should be an array of application objects.

An application will contain information similar to:

```javascript
{
    id: 1,
    company: "Deloitte",
    role: "Strategy Intern",
    dateApplied: "2026-10-15",
    status: "Applied",
    followUp: true,
    notes: "Applied through Babson"
}
```

Each application must be individually identifiable so it can be updated or deleted.

---

## Local Storage

Application data should survive a page refresh.

Use `localStorage`.

The basic flow should be:

1. Load saved applications when the page opens.
2. Store them in JavaScript state.
3. Change the state when the user performs an action.
4. Save the updated state to `localStorage`.
5. Redraw the page.

Do not use a database, CSV file, separate JSON file, server, or API.

---

## JavaScript Style

Keep the JavaScript readable enough for me to explain during the class walkthrough.

Prefer small, clearly named functions.

Possible responsibilities include:

```text
loadApplications()
saveApplications()
addApplication()
renderApplications()
updateSummary()
updateApplicationStatus()
toggleFollowUp()
deleteApplication()
resetTracker()
```

The exact names may change if necessary, but the code should stay easy to understand.

Do not put the entire application inside one giant function.

Do not use complicated or overly compressed JavaScript just to make the code shorter.

---

## Course Concepts to Prefer

Prefer JavaScript concepts covered in class:

- `const`
- `let`
- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions
- Parameters
- `return`
- `if`
- `else if`
- `else`
- Comparison operators
- Logical operators
- `addEventListener()`
- `querySelector()`
- `querySelectorAll()`
- `createElement()`
- `textContent`
- Loops or array iteration
- `localStorage`
- `JSON.parse()`
- `JSON.stringify()`

If a new JavaScript method is necessary, explain what it does and why it is needed.

---

## DOM Safety

Treat user-entered information as text.

For values such as:

- Company
- Role
- Notes

use safe output such as:

```javascript
element.textContent = value;
```

Do not place user-entered content into the page using `innerHTML`.

---

## Required Interactions

The final application must include several types of interaction.

### Form

Adds a new internship application.

### Dropdown

Used for:

- Application status
- Filtering applications

### Checkbox

Used to mark whether follow-up is needed.

### Buttons

Used for:

- Delete
- Reset All

Each interaction should update JavaScript state and redraw the page when necessary.

---

## Calculated Output

The tracker must calculate information from the stored application state.

Calculate:

- Total Applications
- Active Applications
- Interviews
- Offers
- Follow-Ups

For this project:

**Active Applications** are applications with these statuses:

- Applied
- Interview

Offer and Rejected are not counted as active.

The summary numbers must update automatically whenever application data changes.

---

## Filtering

Filter options:

- All
- Applied
- Interview
- Offer
- Rejected

Filtering should only change which applications are displayed.

It must not change or delete the stored data.

The summary numbers should always describe the full application dataset, even when the list is filtered.

---

## Validation

Required fields:

- Company
- Role
- Date applied
- Status

If required information is missing:

- Do not add the application.
- Keep the information already entered.
- Show an inline error message.
- Explain what needs to be fixed.
- Do not use `alert()`.

---

## Required UI States

The application must support every state described in `PRD.md`.

### Empty State

When there are no applications:

- Summary numbers show `0`.
- The form remains available.
- The Application Record shows the planned empty-state message.

### Invalid Input State

When form information is invalid:

- Do not add data.
- Keep the entered information.
- Show inline feedback.

### In-Use State

When applications exist:

- Summary numbers update.
- Application records appear.
- Filters work.
- Status can be changed.
- Follow-up can be changed.
- Applications can be deleted.

### Filtered State With No Matches

If applications exist but none match the selected filter, show:

**No applications match this status.**

Do not show the general empty-state message.

### After Reset State

After Reset All:

- The applications array becomes empty.
- Relevant `localStorage` data is removed.
- Summary values return to `0`.
- The empty state returns.
- A confirmation message appears.

---

## Reset Behavior

Reset All must work without reloading the browser.

It should:

1. Empty the application state.
2. Clear the relevant `localStorage` value.
3. Recalculate the summary.
4. Redraw the application area.
5. Return the page to the empty state.

---

## HTML Rules

Use semantic HTML where appropriate.

Prefer:

- `<header>`
- `<main>`
- `<section>`
- `<form>`
- `<label>`
- `<article>`
- `<footer>`

Every form field must have a visible `<label>`.

Do not rely only on placeholder text.

---

## Accessibility

The tracker must be usable with a keyboard.

Keep visible focus styles.

Do not communicate status using color alone.

Buttons must use descriptive text.

Error messages should explain what went wrong.

Maintain readable color contrast.

---

## Responsive Design

The page must work comfortably on a phone.

Desktop can use the two-column workspace from `DESIGN.md`.

On smaller screens:

- Use one column.
- Keep the progress summary before the form.
- Make inputs full width.
- Make controls easy to tap.
- Stack application information when necessary.
- Do not create horizontal scrolling.

---

## Visual Restrictions

Do not add:

- Gradients
- Glassmorphism
- Drop shadows
- Decorative blobs
- Stock illustrations
- Animated backgrounds
- Giant icons
- Pill-shaped controls
- Excessive rounded corners
- Multiple accent colors
- External fonts
- Decorative animations

Use the typography, grid, lines, whitespace, and Electric Blue accent defined in `DESIGN.md`.

---

## Editing Rules

When I ask for one change:

- Change only what is necessary.
- Do not redesign unrelated parts.
- Do not rewrite working code without a reason.
- Preserve existing functionality.
- Preserve `DESIGN.md`.

If something conflicts with `PRD.md` or `DESIGN.md`, point out the conflict before making a major change.

---

## Testing

After each functional change, test the relevant behavior.

Important tests:

1. Add a valid application.
2. Reject an incomplete application.
3. Refresh the browser and confirm saved data remains.
4. Change an application status.
5. Toggle follow-up.
6. Filter each status.
7. Delete one application.
8. Confirm summary values update.
9. Reset without reloading.
10. Confirm the empty state returns.
11. Test on a narrow/mobile screen.

Use `console.log()` temporarily for debugging if necessary, but remove unnecessary debugging output from the final version.

---

## Walkthrough Preparation

The final JavaScript must be readable enough that I can explain:

- Where application state is stored
- What happens when an application is added
- How `localStorage` works
- Why render functions are called
- How summary values are calculated
- How filters work
- How one application is updated
- Why validation conditions exist
- What happens if an event listener, condition, or render line is deleted

Prefer understandable code over clever code.
