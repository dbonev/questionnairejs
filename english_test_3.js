var q = require('./questionaire_module');

var questions = [];
var q1 = q.create_question("These girls are hungry. ____ want to eat.", "1");
q.set_multichoice(q1, ["1) they", "2) we", "3) he"]);
q.set_explanation(q1, "Fill in the blanks.\n");
questions.push(q1);

var q2 = q.create_question("I am thirsty. I want to ___", "drink", function(){ console.log("GREAT!!!"); });
questions.push(q2);

var q3 = q.create_question("My father is very ___", "3");
q.set_multichoice(q3, ["1) bad", "2) sad", "3) tall", "4) green"]);
questions.push(q3);

var q4 = q.create_question("There ___ many tables in our classroom.", "are");
questions.push(q4);

var q5 = q.create_question("There ___ a new board in our classroom.", "is");
questions.push(q5);

var q6 = q.create_question("Tomatoes are ___", "2");
q.set_multichoice(q6, ["1) ugly", "2) red", "3) tall", "4) sweet"]);
questions.push(q6);

q.start_test(questions);
