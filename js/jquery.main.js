$.ajax({
	url: 'https://cors-anywhere.herokuapp.com/https://www.ssa.group/',
	type: 'GET',
	 beforeSend: function() {
        $('#loader').show();
    },
	success: function(res) {
		$('#main').append('<nav id="nav"></nav>');
		$('#nav').append('<a class="opener" href="#"></a>');
		$('a.opener').append('<span></span>');
		$('#nav').append('<div id="drop"</div>');
		$('#drop').append('<ul class="menu-items"></ul>');
		$(res).find('li.top-level > a').clone().each(function(){
			var elem = $('<li class="menu-item"></li>').append(this);
			$('ul.menu-items').append(elem);
		});
		$('#drop').hide();
		$("a.opener").click(function() {
			$("#drop").toggle( "slow" );
		});
	},
	error: function (request, status, error) {
        alert(request.responseText);
    },
	complete: function() {
        $('#loader').hide();
    }
})