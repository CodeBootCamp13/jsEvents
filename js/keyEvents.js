
document.addEventListener('keypress', function(event) {
	console.log(event);
});

document.addEventListener('keydown', function(event) {
	//event.preventDefault();
	console.log(event);
	var value = event.key;
	switch ( value ) {
		case 'Enter':
			value = '<br>';
			break;
	}
	document.getElementById('eventLog').innerHTML = document.getElementById('eventLog').innerHTML + value;
});

document.addEventListener('keyup', function(event) {
	console.log("KEY UP");
	console.log(event);
});

document.addEventListener('copy', function(event) {
	console.log(event);
});

document.addEventListener('paste', function(event) {
	console.log(event);
});