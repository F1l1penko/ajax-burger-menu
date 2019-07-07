const url = 'https://cors-anywhere.herokuapp.com/https://www.ssa.group/';
$.ajax({
	url,
	type: 'GET',
	beforeSend: () => {
		$('#loader').show();
	},
	success: res => {
		$('#main').append('<nav id="nav"></nav>');
		$('#nav').append('<a class="opener" href="#"></a>');
		$('a.opener').append('<span></span>');
		$('#nav').append('<div id="drop"</div>');
		$('#drop').append('<ul class="menu-items"></ul>');
		$(res).find('li.top-level > a').each((index, a) => {
			const elem = $('<li class="menu-item"></li>').append(a);
			$('ul.menu-items').append(elem);
		});
		$('#drop').hide();
		$("a.opener").click(() => {
			$("#drop").toggle( "slow" );
		});
	},
	error: () => {
		$('#main').append('<p class="error">Can not get data!</p>')
	},
	complete: () => {
		$('#loader').hide();
	}
})