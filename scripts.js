function result() {
	var result = eval(document.getElementById('display').value);
	document.getElementById('pastResults').innerHTML = document.getElementById('display').value + '=' + result + '\n' + document.getElementById('pastResults').innerHTML;
	document.getElementById('display').value = result;
}

function digit(digit) {
	document.getElementById('display').value += digit;
}


document.getElementById("body").addEventListener("keyup", 
	function(event) {
		event.preventDefault();
		var element;
		var propKey = true;
		
		switch(event.keyCode) {
			//if pressed "7"
			case 55:
			case 103:
				element = document.getElementById("seven");
				break;
			default:
				propKey = false;
				element = document.getElementById("display");
				break;
		}
		
		//when the correct key has been pressed:
		if(propKey){
			element.click();
			element.style.opacity = "0.5";
			element.style.color = "blue";
			setTimeout(function colorBack(){element.style.opacity=null; element.style.color=null;},100);
		}
			
});