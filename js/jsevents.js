
// load = the page has loaded
// mouseover = you have moved your mouse over an element
// mouseout = you have moved your mouse out of an element
// submit = you have submitted the form
// focus = you are looking at an HTML input
// blur = you have left an HTML input

function clickHandler() {
	alert('hello. you clicked me');
	return true;
}

function mouseOver() {
	document.getElementById('eventLog').innerHTML = 'mouse over';
}

function mouseOut() {
	document.getElementById('eventLog').innerHTML = 'mouse out';
}

function checkForm() {

	if ( document.getElementById('userName').value == 'eric' ) {
		alert('form is good');
		return true;
	}

	document.getElementById('eventLog').innerHTML = 'Form submit stopped';
	return false;
}

function onBlur(event) {
	console.log(this.value);
	
}

function onFocus() {
	//document.getElementById('eventLog').innerHTML = 'Entered (focus) the input';
}

function onChangeRadio() {
	console.log(this);
	if ( this.checked ) {
		document.body.style.backgroundColor = this.value;
	}
}



// new fancy in-javascript way to create events
document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('button').addEventListener('click', function(event) {
		console.log(event);
		document.getElementById('eventLog').innerHTML = 'clicked!!!';
	});

	document.getElementById('radio_1').addEventListener('change', onChangeRadio);
	document.getElementById('radio_2').addEventListener('change', onChangeRadio);
	document.getElementById('radio_3').addEventListener('change', onChangeRadio);


	document.getElementById('myForm').addEventListener('submit', function(event) {
		var color = 'white';

		event.preventDefault();

		// grab all the form values,
		// submit them with AJAX

		document.getElementById('userName').value = '';
		document.getElementById('lastName').value = '';
		document.getElementById('emailAddress').value = '';
		document.getElementById('userName').focus();


		if ( document.getElementById('radio_1').checked ) {
			color = 'blue';
		} else if ( document.getElementById('radio_2').checked ) {
			color = 'green';
		} else if ( document.getElementById('radio_3').checked ) {
			color = 'red';
		}

		document.body.style.backgroundColor = color;

		return false;
	});

	document.body.addEventListener('click', function(event) {

		console.log(this);

		console.log('Clicked in container', event);

		for ( var i = 0; i < event.path.length; i++ ) {
			if ( event.path[i].id == 'box1' ) { 
				event.path[i].style.backgroundColor = 'pink';
			} else if ( event.path[i].id == 'box2' ) {
				event.path[i].style.backgroundColor = 'purple';
			}
		}

		
	});

	document.getElementById('myLink').addEventListener('click', function(event) {
		event.preventDefault();
		document.body.style.backgroundColor = 'mediumseagreen';

		document.getElementById('eventLog').innerHTML = 'Leaving page in 5 seconds...';

		//setTimeout(function() { window.location.href = document.getElementById('myLink').getAttribute('href'); }, 5000);

		// replace the page content with the contents of the other page
	});

	// addEventListener( EVENT, FUNCTION )
	document.getElementById('userName').addEventListener('blur', onBlur);
	document.getElementById('userName').addEventListener('focus', onFocus);

	document.getElementById('eventLog').innerHTML = 'The page has loaded.';


});