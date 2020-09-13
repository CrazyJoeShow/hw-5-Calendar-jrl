console.log('henlo frins!');
$(document).ready(function () {
	// Object for divs
	var initialToDoStorage = {
		'9am': '',
		'10am': '',
		'11am': '',
		'12pm': '',
		'1pm': '',
		'2pm': '',
		'3pm': '',
		'4pm': '',
		'5pm': '',
	};
	// hour list and keys
	var hourList = [
		'9am',
		'10am',
		'11am',
		'12pm',
		'1pm',
		'2pm',
		'3pm',
		'4pm',
		'5pm',
	];
	var momentHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

	// Parse of the local storage.
	var initialStorage =
		JSON.parse(localStorage.getItem('agendaList')) || initialToDoStorage;
	console.log(initialStorage);

	// saving the current events
	mainContainer.on('click', '.saveBtn', function () {
		console.log($(this).siblings('div').text()); //this works because we need to reference a SIBLING in the same container.
		console.log($(this).siblings('textarea').val());

		var hour = $(this).siblings('div').text();
		var agenda = $(this).siblings('textarea').val();

		initialStorage[hour] = agenda;

		toDoSetter =
			JSON.stringify(initialToDoStorage) + ' how goes it there friend?';
		localStorage.setItem('agendaList', JSON.stringify(initialStorage));
	});

	for (var i = 0; i < momentHours.length; i++) {
		var timeRow = '<row>' + '</row>';
		timeRow.addClass('row time-block');
		mainContainer.append(timeRow);
		//that should add rows for time blocks
	}
});