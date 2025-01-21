Overview:


Building user management application in Express.js along with MongoDB; this application helps users to conduct CRUD operations based on user's data. On the front side, EJS templating renders dynamic HTML for content, where some styling of the content will be done in Tailwind CSS.

Key Features and Functionality:

Create User (Form on index.ejs):

Users can enter their name, email, and image URL to create new entries. The form data is sent as a POST request to /create.
When the form is submitted, the data will be saved into the MongoDB database using the userModel. After the user is created, the page redirects to /read, which lists all the users.
Read Users (Displayed on read.ejs):

The /read route retrieves all users from the database and shows them in a list. It shows the name, email, and profile image of each user.
Under each user, edit or delete their details are options. The data for the user is passed to the read.ejs template for rendering dynamically.
Edit User (Form on edit.ejs):

On clicking the "Edit User" link, a user is taken to the /edit/:Userid route, which presents a form with the details filled in (name, email, and image URL).
The new data submitted to /update/:Userid with a POST request updates the details of the user in the database. Once the details are updated, the user is forwarded to the /read page.
Remove User (Handles on app.js with /delete/:id):
 
Each user, on the /read page has an option to delete their entry. On clicking, it generates the /delete/:id route, which removes the user from the database. The user is subsequently shown back to the /read page
How it All Meets Together:
The core server file is app.js. The file handles all the routes and associated logic in interaction with the database. It uses MongoDB to store the data of its users and Mongoose to define schema and perform operations.
When users interact with the site (create, edit, or delete users), the requests are handled by the respective routes in app.js. The data from MongoDB is passed to the EJS templates (like index.ejs, read.ejs, and edit.ejs) to display and update the user interface accordingly.
Tailwind CSS is used for styling the page, giving it a modern and responsive design.
Flow of User Interactions:
Home Page (index.ejs): Users can create new users through the form.
View All Users (read.ejs): The list of all users is displayed with options to edit or delete.
Edit User (edit.ejs): Users can update their details, and the changes are saved in the database.
Delete User: A user can be deleted from the database.
Observations:
CRUD Operations: The application correctly supports all the basic CRUD operations to manage the user. Users can be created, viewed, updated, and deleted.
Dynamic Data Rendering: Use of EJS templating allows for dynamic rendering of user data based on what is in the database.
Responsive UI: The use of Tailwind CSS ensures that the UI is responsive and user-friendly.
Suggested Improvements:
Form Validation: Currently, there is no validation for the user inputs (like ensuring email format is correct or fields are not empty). Adding server-side and client-side validation would improve the robustness of the app.
Error Handling: It would be good to add error handling for database operations and user actions, such as when a user cannot be found or deleted.
Styling: During the time when Tailwind CSS is being applied, I style the UI, like adding icons or making a better layout for the better UX.
In summary, I have made a basic user management system with Express.js, MongoDB, and EJS. The application will allow the users to do CRUD operations, manage the data of the user with a clean and simple interface.
