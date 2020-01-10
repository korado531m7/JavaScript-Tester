var jsver;
var prepared = false;

console.log = function(...args){
	addConsole(args)
}

function isPrepared(){
	return prepared
}

function setConsole(value){
	document.getElementById('console').innerText = value
}

function addConsole(value){
	document.getElementById('console').innerText += withEol(value)
}

function addColoredConsole(value, color){
	document.getElementById('console').innerHTML += "<font color=\""+color+"\">"+ withEol(value)+"</font>"
}

function withEol(text){
	return (text + "\n")
}

function resetConsole(){
	setConsole('')
}

function clearCode(){
	document.getElementById('codecontents').value = ""
	addColoredConsole("Codes were cleared", "lightgreen")
}

function executeCode(){
	if(isPrepared()){
		resetConsole()
		try{
			eval(document.getElementById('codecontents').value)
		}catch(e){
			addColoredConsole(e, "red")
		}
	}else{
		addColoredConsole("Please wait until preparation is completed", "red")
	}
}

window.onload = function(){
	document.getElementById('java-version').innerText = jsver;
	resetConsole()
	prepared = true
}