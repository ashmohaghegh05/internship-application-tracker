# Mini Project 2 Proposal

## What I Am Building

I am building an internship application tracker that helps me keep track of all the internships I apply to in one place.

I want it to be simple enough that I would actually use it, but useful enough that I can quickly see where I stand with my applications.

## Who It Is For

This tool is mainly for me.

When I apply to a lot of internships, it gets hard to remember which companies I applied to, what role I applied for, when I applied, and whether I ever heard back.

Sometimes I also forget which applications I should follow up on.

Instead of keeping everything in different notes or trying to remember it, I want one page where I can see everything clearly.

## What It Remembers

The tool will remember each internship application I add.

For every application, I want it to save:

- Company name
- Position or role
- Date I applied
- Current application status
- Whether I need to follow up
- Any notes I want to remember

The application status can be:

- Applied
- Interview
- Offer
- Rejected

## Where the Data Lives

The applications will be stored in a JavaScript array.

I also want the data to stay there if I refresh or close the page, so I will save the application data in `localStorage`.

Since I am the only person who needs to use the information, I do not need a database, server, or outside API.

## What Each Action Changes

### Add an Application

When I fill out the form and add an internship, a new application should be added to the saved list.

The page should immediately show the new application and update the numbers at the top.

### Change the Status

If something changes with an application, I want to be able to update its status.

For example, I could change an application from `Applied` to `Interview`.

When I do this, the saved application should change and the summary numbers should update too.

### Mark an Application for Follow-Up

I want to be able to mark an application if I think I should follow up with the company.

When I mark it, that application should remember that it needs follow-up and the follow-up count should increase.

### Filter Applications

I want to be able to filter the list so I can quickly see applications with a certain status.

For example, I could choose `Interview` and only see the applications where I reached the interview stage.

Filtering should only change what I see on the page. It should not delete or change the saved applications.

### Delete an Application

If I added something by mistake or no longer want to keep an application, I should be able to delete it.

The application should be removed from the saved data and the summary numbers should update.

### Reset the Tracker

I also want a way to completely clear the tracker and start over.

This should remove all of the saved applications and return the page to its original empty state without making me reload the page.

## Features

The main features I want are:

1. Add and save internship applications.
2. Update the status of an application.
3. Mark applications that need follow-up.
4. Filter applications by status.
5. Show a summary of my application progress.

The summary could show things like:

- Total applications
- Active applications
- Interviews
- Offers
- Applications that need follow-up

## What I Do Not Know Yet

There are a few JavaScript parts that I am not fully sure how to build yet.

I do not completely understand how to:

- Save an entire array of application objects in `localStorage`.
- Find one specific application in the array and change its status.
- Recalculate all of the summary numbers whenever something changes.
- Filter the applications and redraw only the ones that should be visible.
- Clear both the saved data and the page when the Reset button is clicked.

These are the main JavaScript parts I expect to figure out while building the project.
