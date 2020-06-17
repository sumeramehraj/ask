function quiz(){
	alert("Hey lets start the quiz");
	var a1 = prompt("How many bones are there in human body");
	var score = 0;
    if(a1=="206"){
    	alert("correct answer");
    	score++;
    }
    else{
    	alert("wrong answer");
    }
    var a2 = prompt("Capital of India");
    a2 = a2.toLowerCase();
    if(a2=="new delhi"){
        alert("correct answer");
        score++;
    }
    else{
    	alert("wrong answer");
    }
    var a3 = prompt("Capital of Australia");
    a3 = a3.toLowerCase();
    if(a3=="canberra"){
        alert("correct answer");
        score++;
    }
    else{
    	alert("wrong answer");
    }
    var a4 = prompt("Capital of Assam");
    a4 = a4.toLowerCase();
    if(a4=="dispur"){
        alert("correct answer");
        score++;
    }
    else{
    	alert("wrong answer");
    }
    var a5 = prompt("Capital of Karnataka ");
    a5 = a5.toLowerCase();
    if(a5=="bangalore"){
        alert("correct answer");
        score++;
    }
    else{
    	alert("wrong answer");
    }

    alert("YOUR SCORE IS "+score+" out of 5");
}