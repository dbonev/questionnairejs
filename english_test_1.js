var q = require('./questionaire_module');

var questions = [];
var q1 = q.create_question("When I am ___, I cry", "2");
q.set_multichoice(q1, ["1) happy", "2) sad", "3) brave"]);
q.set_explanation(q1, "Fill in the blanks.\n");
questions.push(q1);

var q2 = q.create_question("This is my ____ Dani.", "brother", function(){ console.log("Yeee"); });
questions.push(q2);

var q3 = q.create_question("Dani's hair is ___", "1");
q.set_multichoice(q3, ["1) Short", "2) Long"]);
questions.push(q3);

var q4 = q.create_question("What is the color of the sky at daytime?", function(a) { return a === "blue"; });
questions.push(q4);

var q5 = q.create_question("My name is ____.", "maya");
questions.push(q5);


var q6 = q.create_question("I am ___ years old", "nine", function() { console.log("A big girl!");});
questions.push(q6);

var q7 = q.create_question("12 + 23 = ___", function(answer) { return answer === (12 + 23).toString(); } );
questions.push(q7);

var q8 = q.create_question("The grass is ___.", "green");
questions.push(q8);

var q9 = q.create_question("19 + ___ - 2 = 27", "10", function() { console.log("WOOOOW!!! You can count!"); });
questions.push(q9);

var q10 = q.create_question("These girls are hungry. ____ want to eat.", "1");
q.set_multichoice(q10, ["1) they", "2) we", "3) he"]);
q.set_explanation(q10, "Fill in the blanks.\n");
questions.push(q10);

var q11 = q.create_question("I am thirsty. I want to ___", "drink", function(){ console.log("GREAT!!!"); });
questions.push(q11);

var q12 = q.create_question("My father is very ___", ["3", "tall"]);
q.set_multichoice(q12, ["1) bad", "2) sad", "3) tall", "4) green"]);
questions.push(q12);

var q13 = q.create_question("There ___ many tables in our classroom.", "are");
questions.push(q13);

var q14 = q.create_question("There ___ a new board in our classroom.", "is");
questions.push(q14);

var q15 = q.create_question("Tomatoes are ___", "2");
q.set_multichoice(q15, ["1) ugly", "2) red", "3) tall", "4) sweet"]);
questions.push(q15);

q.start_test(questions);
