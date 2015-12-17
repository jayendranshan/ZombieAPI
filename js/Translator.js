exports.Zombify = function(sentence){
	var rule2 = /a/gi;
	var rule3 = /^[a-z]/;
	var rule4 = /e/gi;
	var rule5 = /i/gi;
	var rule6 = /o/gi;
	var rule7 = /u/gi;
	var rule8 = /\d+/g;
	var rule9 = /s/g;
	var rule10 = /t/g;
	console.log(sentence);

	var newstr='';
		newstr = sentence.replace(rule2, 'hra');
		newstr = newstr.replace(rule4, 'rr');
		newstr = newstr.replace(rule5, 'rrRr');
		newstr = newstr.replace(rule6, 'rrrRr');
		newstr = newstr.replace(rule7, 'rrrrRr');
		newstr = newstr.replace(rule8, '00000');
		newstr = newstr.replace(rule9, 'sasa');
		newstr = newstr.replace(rule10, 'tartaa');
		console.log(newstr);
		return {
                    'status' : 200,
                    'message' : 'Zombified',
                    'text' : newstr
                };
};

exports.UnZombify = function(sentence){
	var rule1 = /h/gi;
	var rule2 = /r/gi;
	console.log(sentence);
	
	var newstr='';
		newstr = sentence.replace(rule1, 'a');
		newstr = newstr.replace(rule2, 'e');
		console.log(newstr);
		return {
                    'status' : 200,
                    'message' : 'UnZombified',
                    'text' : newstr
                };
};