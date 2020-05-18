
function check(){

	  var question1 = document.quiz.question1.value;
	  var question2 = document.quiz.question2.value;
	  var question3 = document.quiz.question3.value;
	  var correct = 0;


	if (question1 === "Jersulem") {
		correct++;
    }
	if (question2 === "Washinton") {
		correct++;
    }	
	if (question3 === "londan") {
		correct++;
	}
	
   
	
	var index;

	if (correct === 0) {
		index = 0;
	}

	if (correct === 1 || correct === 2) {
		index = 1;
	}

	if (correct === 3) {
		index = 2;
	}
   
	document.getElementById("after_submit").style.visibility = "visible";
	var messages = ["You need more practise!", "That's fine", "Excellent!"];
	document.getElementById("message").innerHTML = messages[index]+" "+document.getElementById("name").value; 
	document.getElementById("number_correct").innerHTML = "You got " + correct + " point/s.";
	
	}
	







