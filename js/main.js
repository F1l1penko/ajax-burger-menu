$( document ).ready(function() {
	var main = $('#main');
	var nav = $('<nav id="nav"></nav>');
	var menu = $('<ul class="menu-items"></ul>');
	var drop = $('<div id="drop"</div>');
	var opener = $('<a class="opener" href="#"></a>');
	var loader = $('#loader');

	main
	.append(
		nav
		.append(
			opener
			.append(
				$('<span></span>')
			)
		)
		.append(
			drop
			.append(
				menu
			)
		)
	);

	drop.hide();
	opener.click(() => {
		drop.toggle( "slow" );
	});

	$.ajax({
		url: 'https://cors-anywhere.herokuapp.com/https://www.ssa.group/',
		type: 'GET',
		beforeSend: () => {
			loader.show();
		},
		success: res => {
			$(res).find('li.top-level > a').each((index, a) => {
				const elem = $('<li class="menu-item"></li>').append(a);
				menu.append(elem);
			});
		},
		error: () => {
			main.append('<p class="error">Can not get data!</p>')
		},
		complete: () => {
			loader.hide();
		}
	});
});