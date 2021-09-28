(function(){
    "use strict";
const submitBtn=document.getElementById('convert');
submitBtn.addEventListener('submit', function(e){
	e.preventDefault();
	const inputValue= parseFloat(document.getElementById('distance').value);/*The parseFloat() function parses a string and returns a floating point number. This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.*/
	//alert(inputValue);
	const answer=document.getElementById('answer');
	if(inputValue){
		
	const conversion=(inputValue*1.609344).toFixed(3);//there is another way, var answer=(math.round(conversion*1000)/1000), math.round هي للتقريب الى اقرب رقم  
	console.log(conversion);
	answer.innerHTML=`<h2>${inputValue} miles converts to ${conversion} kilometers`;
	}
	else{
	
	answer.innerHTML="<h2>Oops! you must enter a number!<h2>";
	}
});
})();