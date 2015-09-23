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
var laurenMenu = "Lauren\'s appetizer is " + invitees.adults[2].dinnerChoice[0] + ". She will be eating " + invitees.adults[2].dinnerChoice[1] + " for dinner and has selected " + invitees.adults[2].dinnerChoice[2] + " as her dessert.";
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
for (i = 0; i < books[0].length; i++) {
  year = 1980;
  books[i].dateRead = year + 5;
}
// books[0].youHadMeAtWoof.dateRead = 1984;
// books[0].theCatcherInTheRye.dateRead = 1994;
// books[0].bangkokHaunts.dateRead = 2000;
console.log(books);
// (Go ahead and make this up, too. Get wild.)

// 17. Remove the second book from the books Array.
console.log('Question 17');
delete books[0].theCatcherInTheRye;
console.log(books);

// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.
console.log('Question Bonus');
console.log('Object Literals serve as a single object that you will build.  A Constructor Object serves a blueprint for many instances of that object.  For example I may need to create many kinds of cars from a car object and then add custom properties to it.');

// 17. Let's play a game. Create an object (like we did with the bike in class) and assign it at least five properties.
// The class will guess what your object is based on it's properties.
console.log('Question 17');
var mysteryObject = {
  hasTeeth: true,
  habitat: 'ocean',
  color: 'stripes',
  diet: ['fish', 'tires', 'whatever'],
  manEater: true
};
console.log(mysteryObject);

// You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
// 18. Create an empty object called "zoo"
console.log('Question 18');
var zoo = {};
console.log(zoo);

// 19. Create assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.
console.log('Question 19');
zoo.lion = {};
zoo.tiger = {};
zoo.bear = {};
console.log(zoo);

// 20. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)
console.log('Question 20');
zoo.lion.timeSlept = 10;
zoo.tiger.timeSlept = 8;
zoo.bear.timeSlept = 14;
console.log(zoo);

// 21. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.
console.log('Question 21');
// for(i = 0; i < zoo[0].length) {
//   var meals = 2;
//   zoo[i].meals = meals + 2;
// }

zoo.lion.meals = [];
zoo.tiger.meals = [];
zoo.bear.meals = [];
console.log(zoo);


// 22. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.
console.log('Question 22');
zoo.lion.meals.monday = {};
zoo.tiger.meals.monday = {};
zoo.bear.meals.monday = {};
zoo.lion.meals.wednesday = {};
zoo.tiger.meals.wednesday = {};
zoo.bear.meals.wednesday = {};
console.log(zoo);

// 23. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
console.log('Question 23');
zoo.lion.meals = [ {
  monday: {
    breakfast: "Meat",
    lunch: "More Meat",
    dinner: "Your Mom"
  }
},
{
  wednesday: {
    breakfast: "Fish",
    lunch: "More Fish",
    dinner: "Zookeeper"
  }
}]
zoo.tiger.meals = [ {
  monday: {
    breakfast: "Salmon",
    lunch: "More Salmon",
    dinner: "Your Mom"
  }
},
{
  wednesday: {
    breakfast: "Fish",
    lunch: "More Fish",
    dinner: "Zookeeper"
  }
}]
zoo.bear.meals = [ {
  monday: {
    breakfast: "Plants",
    lunch: "More Plants",
    dinner: "Your Mom"
  }
},
{
  wednesday: {
    breakfast: "Salmon",
    lunch: "More Salmon",
    dinner: "Zookeeper"
  }
}]

// That array should look like this (within the meals object, within the animal object, within the zoo object):
  [ { monday: {
    breakfast: "cheetos on top of greek yogurt",
    lunch: "6 gallons of Diet Coke",
    dinner: "leftover lasagna"
  }},
   {wednesday: {
    breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
    lunch: "a ham and cheddar lunchable",
    dinner: "I put my thing down, flip it, and reverse it"
  }}]

// 24. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.
console.log('Question 24');
zoo.tiger.timeSlept = zoo.tiger.timeSlept + 2;
console.log(zoo.tiger.timeSlept);

// 25. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.
console.log('Question 25');
zoo.lion.favoriteActivities = ['Eating', 'Lying Around', 'Eating Zookeepers'];
zoo.tiger.favoriteActivities = ['Eating', 'Lying Around', 'Eating Fish'];
zoo.bear.favoriteActivities = ['Eating', 'Hybernating', 'Swimming'];
console.log(zoo);

// 26. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.
console.log('Question 26');
zoo.lion.meals.monday.lunch = '';
console.log(zoo.lion.meals.monday.lunch);

// 27. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.
console.log('Question 27');
zoo.animals = ['lion', 'tiger', 'bear'];
console.log(zoo.animals);

// 28. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.
console.log('Question 28');
zoo.zookeepers = {};
console.log(zookeepers);

// 29. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.
console.log('Question 29');

// 30. This joker wants you to add the "hireDate" for each zookeeper. Within the empty array attached to each name, assign a key/value pair of
// "hireDate" and the value being a string of hire date.
console.log('Question 30');
zoo.zookeepers = [{
  Jim: {
    hireDate: 'July 5th, 2000'
  },
  Jane: {
    hireDate: 'June 12, 1989'
  }
}]




