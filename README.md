# 10000-days

A full stack application all about my special event I'm hosting soon; A classy party on the day that I turn 10,000 days old! 

The purpose of this application is to attendes to learn more about why I am hosting this day and the venue of choice. Attendes will have a chance to RSVP on the site while creating an account at the same time. The account will allow the guests to change their RSVP info and interact with other attendes, hyping the event amongst each other until the day arrives.

### Technologies Used

- Express
- Sequelize
- MySQL
- Bcrypt
- Handlebars
- Dotenv

### Tables/Models in Database
- Users
- Posts
- Comments 

### Installation with Accompanying Data (Seeds)
1. Git clone or download the application and load on VSCode
2. Open your command line, go to the application directory, and run 'npm install'.
    - If this is your first time installing MySQL, please navigate to their documentation for proper installation into your computer and credential creation.
3. Change your package.json scripts to your chosing, preferred to include "start" : "node server.js" as one of your scripts.
4. Create an .env file at the root of the app for Dotenv to run your MySQL credentials for the database. Then in the .env file, type the following and save:
    DB_NAME='just_tech_news_db'
    DB_USER='(YOUR MYSQL USERNAME)'
    DB_PW='(YOUR MYSQL PASSWORD)'
5. Load the MySQL shell in the command line and type the following command to download the original database. Then quit the shell.
    - SOURCE db/schema.sql
6. Navigate to server.js and change the value of 'force: false' under the sequelize.sync function to 'force: true'. Save the file.
7. Run 'npm run seeds' in the command line for the database to be synced with its stock data.
8. Revert the value of 'force: true' back to 'force: false' in serber.js. Save the file.
9. Run 'npm start' in the command line, then navigate to browser and go to http://localhost:3320

### Screenshots

![Screenshot 1]('./screenshots/1.png)

![Screenshot 2]('./screenshots/2.png)

### Future Plans
1. Switch from a MySQL database to a PostgreSQL database
2. Add Hearts to the database so users can 'heart' posts, similar to Instagram.