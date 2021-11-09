const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://climate-change-news12.p.rapidapi.com/news/BBC",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "climate-change-news12.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	var dados = "";
	dados += "<div class='col-12 border'><h2>---</h2></div>";
	for(let i=0; i <= 4; i++){							
		dados += "<div class='col-6 border'>";
		dados += "<h2>"+response[i].title+"</h2>";
		dados += "<p>"+response[i].url+"</p>";
		dados += "</div>";
	}
	$("#linha").html(dados);
});