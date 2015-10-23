var interaction = require('readline');
var common = require('./common_utils');
var	rl = interaction.createInterface({
		input: process.stdin,
		output: process.stdout
});
var score = 0;
var errors = 0;


module.exports = {
	start_test: function(questionary){
		start_asking(questionary);
	}, 
	create_question: function(question, answer, function_on_right, function_on_wrong){
		return _create_question(question, answer, function_on_right, function_on_wrong);
	}, 
	set_explanation: function(question, explanation){
		return _set_explanation(question, explanation);
	},
	set_multichoice: function(question, multichoice){
		question.MC = multichoice;
		return question;
	}
}

function _set_explanation(question, explanation){
	question.E = explanation;
	return question ;
}

function _create_question(question, answer, function_on_right, function_on_wrong){
    var res = {};
	res.Q = question;
	res.A = answer;
	res.on_right = function_on_right;
	res.on_wrong = function_on_wrong;
	return res;
}

function start_asking(questionary){
	_start_asking(questionary);
}

function ask(question, callback){
	var to_ask = question.Q;
	if (question.E != null){
		to_ask = question.E + "\n" + to_ask;
	}
	if (question.MC != null){
		to_ask += "\n" + question.MC;
	}
	to_ask += "\n";
	

	rl.question(to_ask, function(answer){
		if (answer === question.A){
			console.log("Right answer");
			score++;
			if (typeof question.on_right === 'function'){
				question.on_right(answer);
			}
		} else {
			console.log("Wrong answer. The correct one is: " + question.A);
			errors++;
			if (typeof question.on_wrong === 'function'){
				question.on_wrong(answer);
			}
		}
		callback();
	});
}

function _start_asking(questionary){
	common.foreach_with_complete(questionary, function(question, callback){
		ask(question, callback);
	}, 
	function(){
		print_result();
		rl.close();
	});
}

function print_result(){
	var percentage = ( score / (errors + score)) * 100;
	console.log("Asked questions: %d  Right: %d  Wrong: %d. %d% correct", errors + score, score, errors, percentage);
}

