$(function() {
	var button = $('button');

	button.click(function() {
		var status = $('body').attr('class');

		if ( status === 'win' ) {
			$('body').attr('class', 'ios');
		}

		if ( status === 'ios' ) {
			$('body').attr('class', 'droid');
		}

		if ( status === 'droid' ) {
			$('body').attr('class', 'win');
		}
	});
});