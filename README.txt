Moveo task
Tom is Josh’s mentor for JS, but while Covid is still out there he prefers to do remote
sessions.
Tom wants to share with Josh a piece of code, observe him while he is writing and
changing the code in real time.
Help Tom creating an online coding web application with the following pages and
features :
Lobby page (no need for authentication) :
The page should contain the title “Choose code block” and a list of at least 4 items
which represents code blocks, each item can be represented by a name (for example
- “Async case”)
Clicking on an item should take the user to the code block page with the details of the
code block he chooses.
Code block page :
Both users should enter this page. (2 different clients)
Assume that the first user who opens the code block page is the mentor, after that,
any other user will be counted as a student.
The mentor will see the code block he choose with a read only mode
The student will see the code block with the ability to change the code
Code changes should be displayed in real-time (Socket)
Use Highlight.js (or any equivalent library) to highlight the syntax
(Support JS code only)
General guidelines:
Code blocks should be created manually, no need for API or UI.
A code block should have the fields ‘title’ and ‘code’ (code is a string which represent
JS code)
Add clear comments to the code where needed.
This task involves client server and DB, you can use any framework/language you
want.
***Submission instructions: ***
1. Deploy the project and supply the url for the app.
You can use any service you would like for hosting your deployment (There are many
free services for that purpose - railway.app, Netlify, Vercel etc. )
2. Upload your code to GitHub and attach a link to your GitHub repository.
Bonus:
Have a “solution” on a codeblock object (also insert manually), once the student
changes the code to be equal to the solution, show a big smiley face on the screen :)
