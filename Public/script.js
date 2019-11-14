var jsver;
console.log = function(args){
	document.getElementById('console').innerText = args;
}

window.onload = function(){
	document.getElementById('java-version').innerText = jsver;
}

function executeCode(){
	try{
		eval(document.getElementById('codecontents').value)
	}catch(e){
		console.log(e)
	}
}