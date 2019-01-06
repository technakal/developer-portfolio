# Express Portfolio

## Techdegree Unit 06

### Project Overview

Create a personal portfolio demonstrating your web development work, using node.js and Express.js.

### Glossary

| Term | Definition |
| ---- | ---------- |
|      |            |

### Requirements

#### Raw Notes

**_Priority 1_**

- Create a portfolio site
- Include the following pages:
  - Modern landing page
  - About page
    - Share contact info
    - Give elevator pitch
  - Project pages
    - Show at least five projects from this Techdegree
    - Use \_blank on project links so users don't leave the portfolio site
- Display nice images:
  - Profile image 550px x 350px
  - Screenshots for each project:
    - Main landing page 550px x 550px
    - One-to-three additional images of the project 1200px x 550px
- Use JSON file to store project data
  - Store the following data elements:
    - id
    - project_name
    - description
    - technologies
    - live_link
    - github_link (repository)
    - image_urls
- Use Pug as the template engine
- Use node.js and Express.js to:
  - Import the dependencies
  - Link the JSON and Pug templates
    - Remove the pug comments once you're finished
  - Set up routes
    - Home page on '/' (index) route
    - About page on '/about' route
    - Dynamic project pages served on '/project' or /projects route
      - Use the same Pug template for each page, just inject the correct data based on the passed id parameter
        - `/project?1` serves the project with id=1, `projects?4 serves the project with id=4, etc.
  - Set up middleware to utilize static files
  - Handle errors
    - Console.log the error message, status, and stack
  - Set up a server to serve the project
    - Listen on port 3000
    - Console.log the port number
  - Use code comments throughout
  - Cross-browser compatible

**_Priority 2_**

- Customize package.json so that `npm start` serves the app
- Create an error.pug file to serve your errors
  - Display the following items in a user-friendly way:
    - error.message
    - error.status
    - error.stack
- Customize the style
  - Update or add at least three of the following CSS items:
    - color
    - background color
    - font
    - box or text shadows
    - transitions or animations
    - add a logo
  - Document these changes in the README and project submissions.
  - Don't change overall layout or positioning

### Design
