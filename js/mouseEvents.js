var eventLog = document.getElementById('eventLog');
var isMouseDown = false;

// function handleClick(event) {
// 	console.log(event);
// 	eventLog.innerHTML = '<div>click! [' + event.clientX + ', ' + event.clientY + ']</div> ' + eventLog.innerHTML;
// }



var handleClick = function() {
	var event = arguments[0];
	console.log(event);
	eventLog.innerHTML = '<div>click! [' + event.clientX + ', ' + event.clientY + ']</div> ' + eventLog.innerHTML;
}


document.addEventListener('click', handleClick);

document.addEventListener('mousemove', function(ev) {
	document.getElementById('mouseCoords').innerHTML = ev.clientX + ', ' + ev.clientY;
	if ( isMouseDown ) {
		var pen = document.createElement('div');
		pen.style.position = 'absolute';
		pen.style.top = ev.clientY + 'px';
		pen.style.left = ev.clientX + 'px';
		pen.style.backgroundColor = 'blue';
		pen.style.height = '2px';
		pen.style.width = '2px';
		pen.style.display = 'inline-block';
		document.body.append(pen);
	}

});

document.addEventListener('mousedown', function() { document.getElementById('down').innerHTML = 'down'; isMouseDown = true; });

document.addEventListener('mouseup', function(argument_1) {
	var argument_1 = arguments[0];
	console.log('mouse up' , argument_1);
	document.getElementById('down').innerHTML = '';

	isMouseDown = false;
});