const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-search3.p.rapidapi.com/api/v1/search/q=ecology&num=100",
	"method": "GET",
	"headers": {
		"x-user-agent": "desktop",
		"x-proxy-location": "BR",
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	var dados;
	dados += "<div class='col-12 border'><h2>---</h2></div>";
	for(let i=0; i <= 5; i++){							
		dados += "<div class='col-6 border'>";
		dados += "<h2>"+response.results[i].title+"</h2>";
		dados += "<p>"+response.results[i].description+"</p>";
		dados += "<a href='"+response.results[i].link+"'>"+response.results[i].link+"</a>";				
		dados += "</div>";
	}
	$("#linha").html(dados);
});