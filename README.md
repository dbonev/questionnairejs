# questionnairejs
A very basic NodeJS library I am using to quickly setup  simple educational tests, my 9 y/o daughter takes on our Raspberry Pi

This code lets you write a test, in the form of a series of questions. For each question, you specify:
- The text of the question;
- Optional description;
- Multichoice options;
- The correct answer (either as a string or a function to evaluate it);

This runs in a terminal (usage examples below). You need a Node.js on the machine.

Note that this it is completely intentional to require tests to be specified in a JS and not read from configuration or external file.
Why? Mostly, because it's fun.

To define a new test, you create a JavaScript file and construct your questions:
```
// If you put your files in a different directory, 
// adjust the path accordingly
var q = require('./questionaire_module');

var questions = [];
// Multichoice question with explanation
var q1 = q.create_question("When I am ___, I cry", "2");
q.set_multichoice(q1, ["1) happy", "2) sad", "3) brave"]);
q.set_explanation(q1, "Fill in the blanks.\n");
questions.push(q1);

// Simple question with callback on correct answer
var q2 = q.create_question("This is my ____ Dani.", "brother", function(){ console.log("Yeee"); });
questions.push(q2);

// Simple question with function to evaluate the right answer
var q3 = q.create_question("What is the color of the sky at daytime?", function(a) { return a === "blue"; });
questions.push(q3);

// After we prepare all of the questions, simply tell the questionaire_module to run the test
q.start_test(questions);
```
After you compose your questions, you run the program using:
```
$ nodejs name_of_your_test.js
```
