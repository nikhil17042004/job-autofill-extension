Job Application Autofill – Chrome Extension

Overview
This project is a simple Chrome extension that helps autofill common job application form fields with one click.
It is built using plain JavaScript and Chrome Extension Manifest V3.

The goal of this extension is to save time while applying for jobs by automatically filling frequently used details such as name, email, phone number, GitHub profile, and skills or experience.

This project was created as part of an assignment to demonstrate JavaScript basics, DOM manipulation, and understanding of Chrome extensions.

--------------------------------------------------

Features
- Autofill common job application fields
- One click action from extension popup
- Works on standard input fields and text areas
- No external libraries or frameworks used

--------------------------------------------------

Tech Stack
- JavaScript (ES6)
- Chrome Extension (Manifest V3)
- DOM manipulation using content scripts

--------------------------------------------------

Project Structure

job-autofill-extension/
- manifest.json
- popup.html
- popup.js
- content.js
- README.md

--------------------------------------------------

How It Works
- The extension adds a popup with an “Autofill Form” button
- When the button is clicked, a message is sent to the content script
- The content script scans the page for input and textarea fields
- Fields are matched using common attributes like name, id, placeholder, and aria-label
- Matching fields are filled with predefined user data

--------------------------------------------------

Setup and Installation
1. Clone the repository
   git clone https://github.com/nikhil17042004/job-autofill-extension

2. Open Google Chrome and go to
   chrome://extensions/

3. Enable Developer Mode

4. Click on Load Unpacked

5. Select the project folder

The extension will now appear in the Chrome toolbar.

--------------------------------------------------

How to Use
1. Open a job application form (local HTML file or online form)
2. Click the Chrome extensions icon
3. Open Job Application Autofill
4. Click the Autofill Form button
5. Supported fields will be filled automatically

--------------------------------------------------

Testing
The extension was tested using:
- A local HTML job application form
- Public job application pages

Field detection is based on commonly used field names and placeholders.
Some websites may restrict autofill due to browser security or framework-controlled inputs.

--------------------------------------------------

Limitations
- Some complex or protected forms may not allow autofill
- Shadow DOM based forms are not supported in this version

These limitations are expected and outside the scope of this assignment.

--------------------------------------------------

Future Improvements
- Allow users to edit and save their own autofill data
- Support additional fields like LinkedIn and portfolio links
- Use Chrome storage API for saving user information

--------------------------------------------------

Author
Nikhil Chaurasiya
