# Product Requirements Document

## Project

Internship Application Tracker

## Project Summary

I am building a simple internship application tracker that helps me keep all of my applications organized in one place.

Instead of trying to remember which companies I applied to, when I applied, or whether I should follow up, I want a page where I can quickly see my applications and understand my progress.

The tool should remember my application data even after I refresh the page.

---

## User

The main user is me.

I want to use this whenever I apply to an internship or when the status of an application changes.

The tool should be quick to update and easy to understand without needing instructions every time I open it.

---

## Main Problem

When I apply to several internships, the information can become scattered.

I may forget:

- Which companies I already applied to
- Which role I applied for
- When I applied
- Whether I received an interview
- Which applications need follow-up
- Which applications were rejected or resulted in an offer

This tool should keep that information together and give me a quick summary of where I stand.

---

## Main Goal

The main goal is to help me organize internship applications and understand my progress without manually counting or checking every application.

The tool should remember the applications I enter and calculate useful information from them.

---

## What the Tool Remembers

The main JavaScript state will be an array of application objects.

Each application should contain:

- Company name
- Role or position
- Date applied
- Status
- Follow-up status
- Notes
- A unique ID so one application can be updated or deleted

An application could look conceptually like:

```text
Company: Deloitte
Role: Strategy Intern
Date Applied: October 15, 2026
Status: Applied
Follow-Up: Yes
Notes: Applied through Babson
```

---

## Where the Data Lives

The application data will first exist in a JavaScript array.

Because I want the applications to remain after refreshing or closing the page, the array will also be saved in `localStorage`.

The data only needs to be available in the browser I am using.

The project will not use:

- A database
- A server
- An outside API
- A separate JSON file
- A CSV file

---

# Core Features

## 1. Add an Application

The user can enter:

- Company name
- Role
- Date applied
- Status
- Whether follow-up is needed
- Optional notes

When the form is submitted:

1. The input should be checked.
2. If it is valid, a new application object should be added to the applications array.
3. The updated array should be saved to `localStorage`.
4. The application list should redraw.
5. The summary numbers should recalculate.
6. The form should clear.

---

## 2. Update Application Status

Each application should have a status.

Possible statuses are:

- Applied
- Interview
- Offer
- Rejected

The user should be able to change the status after an application has already been created.

Changing a status should:

1. Update that application in the array.
2. Save the change to `localStorage`.
3. Recalculate the summary.
4. Redraw the page.

---

## 3. Follow-Up Tracking

Each application should remember whether follow-up is needed.

The user should be able to turn follow-up on or off using a checkbox.

Changing it should update the application data and the follow-up count.

---

## 4. Filter Applications

The application list should be filterable.

Filter choices:

- All
- Applied
- Interview
- Offer
- Rejected

Filtering should only change what appears on the page.

It should not remove or change the saved application data.

---

## 5. Delete an Application

Each application should have a Delete button.

Deleting should:

1. Remove that application from the array.
2. Update `localStorage`.
3. Redraw the list.
4. Recalculate the summary numbers.

---

## 6. Reset the Tracker

The page should have a Reset All button.

Resetting should:

- Remove every saved application
- Clear the relevant `localStorage` data
- Reset the JavaScript state
- Reset the summary numbers
- Return the page to the empty state

The browser should not need to reload.

---

# Calculated Output

The tool should not only display what the user entered.

It should calculate useful information from the application state.

The dashboard should show:

## Total Applications

The total number of applications stored.

## Active Applications

Applications that are still active.

For this project, an application is active if its status is:

- Applied
- Interview

Applications with Offer or Rejected status are not counted as active.

## Interviews

The number of applications currently marked as Interview.

## Offers

The number of applications currently marked as Offer.

## Follow-Ups

The number of applications currently marked as needing follow-up.

These values should update automatically whenever application data changes.

---

# Interactions

The project will include more than three kinds of interaction.

## Form

Used to add a new internship application.

## Dropdown

Used to select or change application status.

## Checkbox

Used to mark whether an application needs follow-up.

## Buttons

Used to:

- Delete an application
- Reset the tracker

## Filter Control

Used to decide which applications are currently displayed.

---

# Input Validation

The tool should refuse invalid information instead of accepting everything.

## Required Fields

The following cannot be empty:

- Company
- Role
- Date applied
- Status

## Invalid Input Behavior

If required information is missing:

- The application should not be added.
- An error message should appear near the form.
- The page should continue working.
- No `alert()` box should be used.

Example message:

**Please complete the company, role, date, and status before adding the application.**

The notes field can be empty.

---

# Page States

The page should have four clearly designed states.

## 1. Empty State

This is what the user sees the first time the tracker is opened or when there are no saved applications.

The page should show:

- The application form
- Summary cards showing 0
- A clear empty-state message

Example:

**No applications yet. Add your first internship application above.**

The page should not look broken or unfinished.

---

## 2. Invalid Input State

This state appears when the user tries to submit incomplete or invalid information.

The page should:

- Keep the form visible
- Keep the information the user already entered
- Show a clear error message close to the form
- Not add anything to the application array

The error should disappear after the user successfully adds a valid application.

---

## 3. In-Use State

This is the normal state after at least one application has been added.

The page should show:

- Updated summary numbers
- Saved application cards or rows
- Current application status
- Follow-up status
- Status controls
- Delete controls
- Filter controls

Any change to the data should cause the relevant parts of the page to redraw automatically.

---

## 4. After Reset State

After the user presses Reset All:

- The application array should become empty.
- Saved tracker data should be removed from `localStorage`.
- All summary numbers should return to 0.
- The application list should disappear.
- The empty-state message should return.

A small confirmation message can say:

**Tracker cleared. You can start again whenever you are ready.**

---

# Page Structure

The project will use one main page:

`index.html`

The page should contain these sections:

## Header

Contains:

- Project name
- Short explanation of what the tool does

## Summary Dashboard

Shows:

- Total Applications
- Active
- Interviews
- Offers
- Follow-Ups

## Add Application Section

Contains the application form.

## Filter Section

Allows the user to filter applications by status.

## Applications Section

Displays the current application data.

## Reset Section

Contains the Reset All control.

## Footer

A simple footer identifying the project.

---

# JavaScript Structure

The JavaScript should be divided into small functions instead of putting everything into one large block.

Possible responsibilities include:

- Load saved applications
- Save applications
- Add an application
- Render applications
- Calculate the summary
- Change application status
- Change follow-up status
- Delete an application
- Filter applications
- Reset the tracker

The function names may change during development, but the code should stay readable enough that I can explain what each major part does.

---

# Safety and DOM Rules

User-entered text should be displayed as text, not interpreted as HTML.

For company names, roles, and notes, JavaScript should use safe text output such as `textContent`.

The tool should not use `alert()` for messages.

Errors and confirmations should appear directly on the page.

---

# Technical Requirements

The project must use:

- Plain HTML
- Plain CSS
- Plain JavaScript
- Semantic HTML
- JavaScript state
- An array of objects
- Functions
- Conditionals
- Event listeners
- DOM manipulation
- `localStorage`

The project will not use:

- React
- Tailwind
- Bootstrap
- External JavaScript libraries
- CDN libraries
- A backend
- A database
- An outside API

---

# Responsive Design

The tracker should work on both desktop and mobile.

On larger screens:

- Summary cards can appear in a row.
- The form and application area can use the available width efficiently.

On smaller screens:

- Summary cards should stack or wrap.
- Form controls should become full width.
- Application cards should remain readable.
- Buttons and dropdowns should be easy to tap.
- There should be no horizontal scrolling.

---

# Success Criteria

The project is successful if I can:

1. Add an internship application.
2. Refresh the browser and still see it.
3. Change its status.
4. Mark or remove follow-up.
5. Filter the application list.
6. Delete an application.
7. See summary numbers update automatically.
8. Reset the tracker without reloading the page.
9. Enter invalid information and receive a useful error message.
10. Use the tool comfortably on a phone.

---

# Later / Not Required for This Version

To keep Mini Project 2 focused, I will not build these features yet:

- User accounts
- Cloud syncing
- Shared applications between different users
- Automatic internship searching
- Email reminders
- Calendar integration
- Company information from an API
- Resume uploads
- AI-generated application advice

Those features would require servers, APIs, or more complexity than this project needs.
