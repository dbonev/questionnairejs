var test = require('./questionaire_module');

var questions = [];

var q = test.create_question("O |", "2");
test.set_explanation(q, "Choose behind, in front of, next to, between");
test.set_multichoice(q, ["1) Behind", "2) Next to", "3) Between", "4) In Front of"]);
questions.push(q);

q = test.create_question("O | O", "3");
test.set_multichoice(q, ["1) Behind", "2) Next to", "3) Between", "4) In Front of"]);
questions.push(q);

q = test.create_question("O", "1");
test.set_multichoice(q, ["1) Behind", "2) Next to", "3) Between", "4) In Front of"]);
questions.push(q);

q = test.create_question("Ф","4");
test.set_multichoice(q, ["1) Behind", "2) Next to", "3) Between", "4) In Front of"]);
questions.push(q);

test.start_test(questions);
