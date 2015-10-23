var q = require('./questionarie_module');

var questions = [];
var q1 = q.create_question("When I am ___, I cry", "2", null, null);
q.set_multichoice(q1, "1) happy\n2) sad\n3) brave");
q.set_explanation(q1, "Fill in the blanks.\n");
questions.push(q1);

var q2 = q.create_question("This is my ____ Dani.", "brother", function(){ console.log("Yeee"); }, null);
questions.push(q2);

var q3 = q.create_question("Dani's hair is ___", "1");
q.set_multichoice(q3, "1)short\n2)long");
questions.push(q3);

q.start_test(questions);
