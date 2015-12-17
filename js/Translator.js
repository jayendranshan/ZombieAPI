define([],function(){
  var Translator = function(){

  	//alert('Translator');
  	this.zombifyRule();
};

Translator.prototype.zombifyRule = function(sentence){
	var rule2 = /a/gi;
	var rule3 = /^[a-z]/;
	var rule4 = /e/gi;
	var rule5 = /i/gi;
	var rule6 = /o/gi;
	var rule7 = /u/gi;
	var rule8 = /\d+/g;
	var rule9 = /s/g;
	var rule10 = /t/g;
	try
	{
		var isNumber = isNaN(sentence);
		if(isNumber == false)
		{
			return '0000000000';
		}
		else if(sentence===undefined)
		{
			return '';
		}
		else
		{
			var newstr='';
			newstr = this.zombifyRule1(sentence);
			newstr = newstr.replace(rule2, 'hra');
			newstr = newstr.replace(rule4, 'rr');
			newstr = newstr.replace(rule5, 'rrRr');
			newstr = newstr.replace(rule6, 'rrrRr');
			newstr = newstr.replace(rule7, 'rrrrRr');
			newstr = newstr.replace(rule8, '00000');
			newstr = this.zombifyRule3(newstr);
			newstr = newstr.replace(rule9, 'sasa');
			newstr = newstr.replace(rule10, 'tartaa');
			//newstr = newstr.replace(rule8, 'RR');
			return newstr;
			//alert(newstr);
		}
	}
	catch(err) {
        message.innerHTML = "Error: " + err + ".";
    }

	
};

Translator.prototype.zombifyRule1 = function(str){
	var rule1 = /r/g;
	var newArray=[];
	var resultArray=[];
	var result='';
		newArray = str.split(' ');
		for (i = 0; i < newArray.length; i++) 
			{
				var tempStr = newArray[i];
    			var res = tempStr.slice(tempStr.length-1, tempStr.length);
    			if(res === 'r')
    			{
    				tempStr = tempStr.replace(rule1, 'rh');
    			}
    			resultArray.push(tempStr);
    			
    			
			}
			result=resultArray.join(' ');
			return result;
};

Translator.prototype.zombifyRule3 = function(str){
	var rule3=/([.!?])\s*(\w)/g;
	var newStr=''
	newStr = str.replace( rule3, function (str) {
                return str.toUpperCase();
            });
	return newStr;
};

return Translator;
});