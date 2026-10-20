# Internship Application Tracker

**Who opens this and what they need in the first five seconds:**  
I open this tool when I want to quickly see where I stand with my internship applications, what needs my attention, and which applications I should follow up on.

## What This Tool Does

The Internship Application Tracker helps me keep all of my internship applications organized in one place.

Instead of keeping track of companies, roles, dates, and application statuses in different notes, I can enter everything into one tool and quickly see how my internship search is going.

The tracker remembers my applications in the browser and calculates:

- Total applications
- Active applications
- Interviews
- Offers
- Applications that need follow-up

## Live Website

[Open the Internship Application Tracker](https://ashmohaghegh05.github.io/internship-application-tracker/)

## How to Use It

### Add an Application

Fill in:

- Company
- Role
- Date applied
- Status
- Optional notes
- Whether the application needs follow-up

Then click **Add Application**.

### Change a Status

Each saved application has a status dropdown.

The status can be changed between:

- Applied
- Interview
- Offer
- Rejected

The summary numbers update automatically when the status changes.

### Track Follow-Ups

Each application has a **Needs follow-up** checkbox.

Checking or unchecking it updates the Follow-Ups total.

### Filter Applications

Use the Filter Status dropdown to show:

- All
- Applied
- Interview
- Offer
- Rejected

Filtering changes what is visible without deleting or changing the saved applications.

### Delete an Application

Use the Delete button beside an application to remove it.

The summary numbers update automatically.

### Reset the Tracker

Use **Reset All** to clear all applications and return the tracker to its empty state without reloading the page.

## What the Tool Remembers

Each application stores:

- Company
- Role
- Date applied
- Status
- Follow-up status
- Notes
- A unique ID

The applications are stored in a JavaScript array and saved in `localStorage`, so they remain after the page is refreshed in the same browser.

## Design Direction

Before building the final design, I compared three visual directions:

- Option A — Editorial Career Intelligence
- Option B — Precision Command Center
- Option C — Swiss Career Dossier

I chose **Option C — Swiss Career Dossier** because it made the application progress the most visible while still feeling professional and distinctive.

The final design uses strong typography, grid lines, numbered application records, a warm background, and one blue accent instead of shadows, gradients, or decorative effects.

## Where the Final Result Differed From What I Expected

I originally expected the project to look more like a normal dashboard with separate cards. After comparing the three design options, the final version became a more editorial Swiss-style application record with large progress numbers, numbered entries, and horizontal rules instead of floating cards.

## Required Question

### Pick one piece of AI output you did not accept as-is. What did it give you, what did you change, and how did you know it needed changing?

AI generated three different visual directions for the tracker.

I did not simply accept the first design it produced. I opened Options A, B, and C in the browser and compared how each one presented the application's most important information.

Option A was clean and professional, but it felt more traditional than I wanted.

Option B was distinctive, but the dark command-center style made the project feel more like a developer tool than a professional internship tracker.

I chose Option C, the **Swiss Career Dossier** direction. It made the progress numbers immediately visible, kept the application records easy to scan, and felt distinctive without adding unnecessary decoration.

After making that decision, I removed Options A and B and used Option C as the basis for `DESIGN.md` and the final interface.

I knew the AI output needed changing because the main purpose of the tool is to help me understand my internship progress quickly. The final design needed to make the calculated application information more important than the decoration.

### Commit

[View the Option C design commit](https://github.com/ashmohaghegh05/internship-application-tracker/commit/5bb97f32c08c081c0a7e8a10e2b9d0a41fb20361)

## Technology

This project uses:

- HTML
- CSS
- Vanilla JavaScript
- `localStorage`

It does not use a framework, database, server, or outside API.
