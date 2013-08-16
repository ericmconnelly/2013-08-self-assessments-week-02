_do not edit; generated by bin/readme_

## AJAX
* In the file provided, write some simple jQuery ajax calls, one for a GET and one for a POST request. Assume you are dealing with JSON data, use the `url` variable as your request url.
* Include success & error functions with `console.log` statements.


## AJAX
In the provided `requests.js` file:
  * Send the provided tweet using a `POST` request to the Parse API.
  * Retrieve that tweet using a `GET` request to the same url, & log it to the console.
  * Use the provided `url` variable as your request url, and assume you are sending & receiving JSON data.
  * Include success & error functions for both, which log the status of the request to the console.


## AJAX - 10 minutes

In the `requests.js` file provided:

* Send the provided tweet using a `POST` request to the Parse API.
* Retrieve that tweet using a `GET` request to the same url, & log it to the console.
* Use the provided `url` variable as your request url, and assume you are sending & receiving JSON data.
* Include success & error functions for both, which log the status of the request to the console.


## Algorithm Complexity
* [ ] List and briefly describe the types of algorithmic complexity. Be as clear and complete as necessary to demonstrate your mastery.
* [ ] What time complexity do the following three functions have (with respect to the size of the input `array`)?

```
var retrieve = function (key, array){
  var hash = 0;
  for (var i = 0; i < key.length; i++){
    var letter = key [i];
    // (note: this is a standard, uninteresting hashing algorithm)
    hash = hash + Math.pow (hash, letter) % array.length;
  }
  return array [hash];
};

var sortedArrayContainsItem = function (array, item){
  var center = Math.floor (array.length / 2);
  if (array [center] === item){
    return true;
  }
  var halfOfArray = item < array [center] ? array.slice (0, center) : array.slice (center);
  return sortedArrayContainsItem (halfOfArray, item);
};
```


## Algorithms
* [ ] Write a function that, given a string, returns the first duplicated letter.
  * Extra credit: Return an array of all duplicated letters.
* [ ] Include a comment near the end of the file stating what complexity you believe your solution to be.


## Algorithms
  * Write a function that, given a string, returns an array of all the duplicated letters. Whitespace can be ignored.
    * Include a comment near the end of the file stating what complexity you believe your solution to be.
  * List and briefly describe the types of algorithmic complexity. Be as clear and complete as necessary to demonstrate your mastery.


## Backbone
* Given the supplied user Backbone model, create a view using forms that allows a user model to change or set their password.


## Backbone + CoffeeScript - 45 minutes

* Given a working Backbone view class that is backed by a collection of todo tasks, write a todo model and a todo collection that satisfies the interface expected by the view
* To compile your files: in terminal from within the `CoffeeScript_Backbone` directory, run `sh ./build.sh`.
  * This will compile the coffee files with source maps & watch them for changes. It might be wise to run this in another terminal window so you can still commit often.
  * Note: if you would like to enable source maps in the chrome console, click the gear to open the settings, then make sure `Source Maps` is checked. Source maps will show you line errors corresponding to your CoffeeScript files. This is an optional step to aid in debugging.


## D3
* [ ] Add a comment for each line in `d3_sample.js`. If you run up against a method call you haven't seen before, feel free to look up what it does -- but explain it in your own words.



# Drawing Data Structures
- Using [draw.io](http://draw.io) create visual representations of the following data structures:
  * linked list
  * binary search tree
  * graph

Export and commit each image.


## Hash Table Collision Resolution
* [ ] Implement collision resolution for the working hash table in `hashTable.js`


## Queue
* [ ] Implement a queue class.
  * You can use an array for storage, and delegate to its methods
  * The stack should only have `.add` and `.remove`, no other properties or methods (you can test this by calling Object.keys() on your stack instance)
  * The queue should clean up references to values that it no longer needs.


## Data Structures
* [ ] Describe the difference between a stack and a queue and give examples of when you might use them.


## Stack
* [ ] Implement a stack class.
  * You can use an array for storage, and delegate to its methods
  * The stack should only have `.add` and `.remove`, no other properties or methods (you can test this by calling Object.keys() on your stack instance).


## HTML/jQuery
The included index.html contains two paragraph tags, each containing a block of lorem ipsum text.
* [ ] Given the `<script>` tag at the bottom of the body and write a function that wraps every word in its own `<span>` tag.
* [ ] Make each word change color once per second to a random color.



## HTML/CSS basics

Create a simple HTML page with a jQuery click event.

- Should contain 2 different color DIVs that are floated side by side. (e.g. http://i.imgur.com/Wbtbv6j.png)
- Use jQuery to set up a click event that will change the background color of only the most recently clicked element.
  * If the the main body is clicked, all elements should change to their default background color.
  * *Note*: CSS page is not needed, you can simply add a `<style>` tag in the `<head>`


## HTML/CSS - 10 minutes
  * Create a basic HTML page with a text input & a submit button below it, both of which are centered (similar to the home page of Google). Do not use the `center` tag.
  * Clicking the button should result in the text value from the input box being logged to the console.


## Instantiation Patterns
* [ ] Extend the native `Array` class to have these useful functions:
  * `.first` - Returns the first element of the array
  * `.last` - Returns the last element of the array


## Inheritance Patterns
* [ ] The included class `SmartPhone` and its parent class `Phone` are written in the functional instantiation style. Refactor them to be written in the pseudo-classical style (using the keyword `new`), including shared methods.


## Javascript basics
Create the following functions:

* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  * Write a function that finds the sum of all the multiples of 3 or 5 below 1000.

* Find the greatest product of five consecutive digits in this 1000-digit number:
  * `7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450`


## JS Basics - 10 minutes
  * Write a function that accepts a string as its only input, and returns the reversed version of that string.
    * *Do **NOT** use the native reverse method :collection that pass a truth test.


## Non-relational DB's - 10 minutes

* List the main differences you can think of between relational databases and non-relational ones.


## Node - 25 minutes

* Fill in the missing components of the provided HTTP server in `server.js` such that it can accept POST requests to "/hifive" and "/lowfive"
  * Serve up the appropriate image (provided) for each, on a successful `POST` request
    * *Don't forget to serve the proper content*


## ORMs

Suppose you are provided with a `query()` function that can retrieve data from a database when given a string of valid SQL code, and a User class:

* Implement User.prototype.save(), such that it stores the current user's data to the database
  * Users have a name, id, and email

* Using the internet, find the correct syntax for
  * Defining sequelize tables for users and tweets
    * Declare the association that users have many tweets
  * Using your definitions, write code needed to build & save a new user


## Recursion
* Write a function that accepts a DOM element as input and returns whether or not the element contains five or more `div` elements.


## Recursion - 15 minutes
  * Print every number in an array of numbers, using recursion, not loops.


## Recursion
* Given a working tree data structure implement a `.search()` method that uses recursion to find the number of times a given payload appears in the tree.


## Regular Expressions
* Write a simple regex that matches valid dates in the format mm/dd/yyyy. The month and the day might be one digit or two.


## Ruby
  * Create an array of 10 numbers
  * Write a separate "doubling" function that returns any number it is given multiplied by two
  * Iterate through the array, passing each number to the "doubling" function in turn
  * Save the original numbers and the doubled results as key-value pairs in a hash object


## Sinatra
  * Given a skeleton Sinatra server tied to a local database, create a simple idea list app.
    * Serve down a basic `index.html` file with a text input and a list of previously submitted ideas below.
    * Users should be able to submit ideas that will be saved to the database.
    * Once saved, the list should be updated with the new idea.


## SQL - 20 minutes

* Using [WWW SQL Designer] (http://ondras.zarovi.cz/sql/demo/) or [DB designer] (http://dbdsgnr.appspot.com/), draw the schema for the following data
  * tables
    * publisher
      * has many authors
      * has one genre
    * author
      * has many publishers
      * has many genres
    * genre
      * has many publishers
      * has many authors
  * Be sure to include any foreign keys you will need, as columns of the tables you design
  * Export as an image and save to the `sql` folder. To take a screen shot on a Mac, use the shortcut `Cmd+Shift+4` then drag a box around your desired image. The image will be saved to the desktop.
* Write an `INSERT` query that stores a new user record with a name, age, and location


## Testing - 25 minutes

* Given a hash table implementation, write tests that provide decent coverage for the `insert` & `retrieve` functions.


## Underbar
* Implement:
  * _.each
  * _.defaults
  * _.once
  * _.contains


## Underscore
  * Implement an `each()` function that works like underscore's each helper
    * Must handle passed-in arrays, objects, and strings as input values.
  * Using `each`, implement `_.filter()`
    * `_.filter()` returns an array of all the elements in the original collection that pass a truth test.
    * The first argument to `filter()` is a collection
    * The second argument is an iterator function, used as the truth test.
    * Example: `_.filter([3,4,5,6], function(number){ return number % 2; })` returns `[3,5]`


## Underscore
* Write out the steps in English to perform the action done by `_.each()`.
* Test drive and implement `_.map()` and `_.uniq()`


## Underbar
* [ ] Implement a `reduceRight` function
  * Do not use any external function calls (even to helpers) within your implementation.
  * `reduceRight` behaves much the same as `_.reduce`, but traverses the target in the opposite direction.
  * Note: your function only needs to work correctly on arrays.


