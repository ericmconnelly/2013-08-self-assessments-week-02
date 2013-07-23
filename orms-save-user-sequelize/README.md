## ORMs

Suppose you are provided with a `query()` function that can retrieve data from a database when given a string of valid SQL code, and a User class:

* Implement User.prototype.save(), such that it stores the current user's data to the database
  * Users have a name, id, and email

* Using the internet, find the correct syntax for
  * Defining sequelize tables for users and tweets
    * Declare the association that users have many tweets
  * Using your definitions, write code needed to build & save a new user
