const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://newscatcher.p.rapidapi.com/v1/search?q=sustainability&lang=pt&sort_by=relevancy&page=1&media=True",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "newscatcher.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};

$.ajax(settings).done(function (response) {
	var dados;
	for(let i=0; i <= 4; i++){					
		dados += "<h2>"+response.articles[i].title+"</h2>";
		dados += "<p>"+response.articles[i].summary+"</p>";		
		dados += "Fonte: <a href='"+response.articles[i].link+"'>"+response.articles[i].link+"</a>";
		dados += "Créditos: <p>"+response.articles[i].rights+"</p>";		
	}
	console.log(response);
	$("#linha").html(dados);
});