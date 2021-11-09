$(".btn").click(function(){
	$("#linha").html("<div class='col-12 border'><h1>Carregando...</h1></div>");
	buscando($(this).val());
});
function buscando(parametro){
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://instagram47.p.rapidapi.com/search?search="+parametro,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "instagram47.p.rapidapi.com",
			"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
		}
	};

	$.ajax(settings).done(function (response) {
		var dados = "";
		dados += "<div class='col-12 border'><h2>Hashtags</h2></div>";
		for(let i=0; i <= 4; i++){							
			dados += "<div class='col-2 border'>";
			dados += "<h6>#"+response.body.hashtags[i].hashtag.name+"</h6>";
			dados += "<p>"+response.body.hashtags[i].hashtag.search_result_subtitle+"</p>";				
			dados += "</div>";
		}
		dados += "<div class='col-12 border'><h2>Contas</h2></div>";
		for(let i=0; i <= 6; i++){							
			dados += "<div class='col-12 border'>";
			dados += "<h6>"+response.body.users[i].user.full_name+" - @"+response.body.users[i].user.username+"</h6>";
			dados += "<a href='https://www.instagram.com/"+response.body.users[i].user.username+"'>https://www.instagram.com/"+response.body.users[i].user.username+"</a>";		
			dados += "</div>";
		}
		console.log(response);
		$("#linha").html(dados);
	});
}
