var jsver;

console.log = function(args){
	addConsole(args)
}

function setConsole(value){
	document.getElementById('console').innerText = value
}

function addConsole(value){
	document.getElementById('console').innerText += value
}

function resetConsole(value){
	setConsole('')
}

window.onload = function(){
	document.getElementById('java-version').innerText = jsver;
}

function executeCode(){
	resetConsole('')
	try{
		eval(document.getElementById('codecontents').value)
	}catch(e){
		console.log(e)
	}
}