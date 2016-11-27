$(function() {
	
	$(".oJapao").click(function(event){
		event.preventDefault();
	    $('#artigo').load('pages/oJapao.html');
	});

	$(".migracao").click(function(event){
		event.preventDefault();
	    $('#artigo').load('pages/migracao.html');
	});

	$(".motivacao").click(function(event){
		event.preventDefault();
	    $('#artigo').load('pages/motivacao.html');
	});

	$(".modelo").click(function(event){
		event.preventDefault();
	    $('#artigo').load('pages/modelo.html');
	});

	$(".beneficios").click(function(event){
		event.preventDefault();
	    $('#artigo').load('pages/beneficios.html');
	});

	$(".numeros").click(function(event){
		event.preventDefault();
	    $('#artigo').load('pages/numeros.html');
	});

	$(".grupo").click(function(event){
		event.preventDefault();
	    $('#artigo').load('pages/grupo.html');
	});
	
	$(".referencias").click(function(event){
		event.preventDefault();
	    $('#artigo').load('pages/referencias.html');
	});
});