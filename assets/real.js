console.log('henlo frinss');
$(document).ready(function () {
	// GLOBAL VARIABLES
	var currentDateText = $('#current-day');
	// console.log(currentDateText);

	var mainContainer = $('.main');
	// console.log(mainContainer);
	// MOMENTS

	let m = moment();

	console.log(m.hour());

	let currentHour = moment().format('h');
	console.log(currentHour);

	//looping m24 hour clock
	if (currentHour < 10) {
		console.log(currentHour + ' is less than!');
	}

	currentDateText.text(moment().format('MMM ddd do YYYY'));

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

	// local storage .parse
	var initialStorage =
		JSON.parse(localStorage.getItem('agendaList')) || initialToDoStorage;
	console.log(initialStorage);

	//  saving the events
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
		var timeRow = $('<row>' + '</row>');
		timeRow.addClass('row time-block');
		mainContainer.append(timeRow);

		var hourContainer = $('<div>');
		hourContainer.addClass('col-2 hour');
		hourContainer.text(hourList[i]);
		timeRow.append(hourContainer);

		// form container for the input
		var formContainer = $('<textarea>');
		formContainer.addClass('text-area col-8');
		formContainer.attr('placeholder', 'Open' + hourList[i]);

		//class added to the Container
		if (currentHour < momentHours[i]) {
			formContainer.addClass('future');
		} else if (currentHour > momentHours[i]) {
			formContainer.addClass('past');
		} else formContainer.addClass('present');

		formContainer.attr('id', [i]);
		formContainer.text(initialStorage[hourList[i]]);
		timeRow.append(formContainer);

		var formSave = $('<div>' + ' SAVE' + '</div>');
		formSave.addClass('saveBtn col-2 fas fa-save');
		formSave.attr('dataType', hourList[i]);
		timeRow.append(formSave);
	}
});
