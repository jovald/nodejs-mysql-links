## File Structure
- database, it the folder with all the sql queries, you can use to recreate the database for this application
- src, it's all the code for the Backend and Frontend Application
- docs

## Setup
1. Install packages:
```sh
npm install
```
2. Rename .env.copy to .env and fill the variables
3. Recreate the database by running the database/db.sql pointing the database

If you have a problem with the login method for the application/database, run the next script replacing: USER, HOST and PASSWORD

```sh
ALTER USER 'USER'@'HOST' IDENTIFIED WITH mysql_native_password BY 'PASSWORD'
```

https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server