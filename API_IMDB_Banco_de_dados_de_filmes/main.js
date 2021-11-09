const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://data-imdb1.p.rapidapi.com/movie/byKeywords/environment/?page_size=50",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	var dados = "";
	dados += "<div class='col-12 border'><h2>-Filmes sobre Meio Ambiente</h2></div>";
	for(let i=0; i < response.count; i++){	
		dados += "<div class='col-6 border'>";				
		dados += "<h2>"+response.results[i].title+"</h2>";
		dados += "</div>";
	}
	$("#linha").html(dados);
});