var q = require('./questionaire_module');

var questions = [];

var q1 = q.create_question("My name is ____.", "maya");
questions.push(q1);


var q2 = q.create_question("I am ___ years old", "nine", function() { console.log("A big girl!");});
questions.push(q2);

var q3 = q.create_question("12 + 23 = ___", function(answer) { return answer === (12 + 23).toString(); } );
questions.push(q3);

var q4 = q.create_question("The grass is ___.", "green");
questions.push(q4);

var q5 = q.create_question("19 + ___ - 2 = 27", "10", function() { console.log("WOOOOW!!! You can count!"); });
questions.push(q5);

q.start_test(questions);

