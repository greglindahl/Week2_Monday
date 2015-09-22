//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.

console.log("Question 1");
var me =  {
  name: 'Greg',
  city: 'Denver',
  jobTitle: 'UI/UX Engineer'
}
console.log(me);

console.log('Question 2'); // To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                               family: ['Joan', 'Kyle', 'Hank'] }

me.family = ['John','Peggy', 'Andrew', 'Nick', 'Kevin'];
console.log(me);

// 3. Using the "me" object, use two different methods of accessing your city.
console.log('Question 3');
console.log(me.city);
console.log(me["city"]);

// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinneChoice array)
console.log('Question 4');
console.log(invitees.adults[0].dinnerChoice[1]);

// 5. Access Pablo's table number.
console.log('Question 5');
console.log(invitees.children[1].table);

// 6. Access Lauren's seating specialConsideration.
console.log('Question 6');
console.log(invitees.adults[2].specialConsiderations);

// 7. Access Billy's dessert choice (this will be the third item in his dinneChoice array)
console.log('Question 7');
console.log(invitees.adults[1].dinnerChoice[2]);

// 8. Access Ada's allergies.
console.log('Question 8');
console.log(invitees.children[2].allergies[0]);

// 9. Create a string that reads Lauren's dinner choice in a sentence.
console.log('Question 9');
var laurenMenu = "Lauren's appetizer is " + invitees.adults[2].dinnerChoice[0] + ". She will be eating " + invitees.adults[2].dinnerChoice[1] + " for dinner
and has selected " + invitees.adults[2].dinnerChoice[2] + " as her dessert.";
console.log(laurenMenu);
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
console.log('Question 10');
var jsWorkshop = new Object();
console.log(jsWorkshop);

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
console.log('Question 11');
jsWorkshop.classmates = ['Jon', 'Jane', 'Jim', 'June', 'Josh'];
console.log(jsWorkshop);

// 12. Acesss the third classmate in your "jsWorkshop" object.
console.log('Question 12');
console.log(jsWorkshop.classmates[2]);

// 13. Get the length of the fourth classmate's name.
console.log('Question 13');
console.log(jsWorkshop.classmates[3].length);

// 14. Clear the classmates value.
console.log('Question 14');
jsWorkshop.classmates = '';
console.log(jsWorkshop.classmates);

// 15. Create an emtpy array called "books".
console.log('Question 15');
// Create three objects that contain book titles, their author, and number of pages.
// Insert the three objects into the "books" array.
// (Feel free to make up the titles. And the authors. Have fun. No pressure.)
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
// Final desired result:
    var books = [{  youHadMeAtWoof: {
                                  title: "You Had Me at Woof",
                                  author: "Julie Klum",
                                  pages: 207
                                  },
                   theCatcherInTheRye: {
                                  title: "The Catcher in the Rye",
                                  author: "JD Salinger",
                                  pages: 214
                                  },
                   bangkokHaunts: {
                                  title: "Bangkok Haunts",
                                  author: "John Burdett",
                                  pages: 569,
                                  }
                }]
console.log(books);

// 15a. Access the author of the first book.
console.log('Question 15a');
console.log(books[0].youHadMeAtWoof.author);

// 15b. Print the length of the author the the third book.
console.log('Question 15b');
console.log(books[0].bangkokHaunts.author.length);

// 16. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
console.log('Question 16');
books[0].youHadMeAtWoof.dateRead = 1984;
books[0].theCatcherInTheRye.dateRead = 1994;
books[0].bangkokHaunts.dateRead = 2000;
console.log(books);
// (Go ahead and make this up, too. Get wild.)

// 17. Remove the second book from the books Array.
console.log('Question 17');
delete books[0].theCatcherInTheRye;
console.log(books);

// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.
console.log('Question Bonus');
console.log('Object Literals serve as a single object that you will build.  A Constructor Object serves a blueprint for many instances of that object.  For example I may need to create many kinds of cars from a car object and then add custom properties to it.');
