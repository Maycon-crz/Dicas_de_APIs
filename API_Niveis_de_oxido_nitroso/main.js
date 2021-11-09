const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://atmosphere-nitrous-oxide-levels.p.rapidapi.com/api/nitrous-oxide-api",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "atmosphere-nitrous-oxide-levels.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	var dados;
	dados += "<div class='col-12 border'><h2>---</h2></div>";
	for(let i=200; i < response.nitrous.length; i++){							
		dados += "<div class='col-6 border'>";
		dados += "<h2>Data: "+response.nitrous[i].date+"</h2>";
		dados += "<p><b>Média:</b> "+response.nitrous[i].average+"</p>";
		dados += "<p><b>Unc médio:</b> "+response.nitrous[i].averageUnc+"</p>";
		dados += "<p><b>Tendência:</b> "+response.nitrous[i].trend+"</p>";
		dados += "<p><b>Tendência Unc:</b> "+response.nitrous[i].trendUnc+"</p>";
		dados += "</div>";
	}
	$("#linha").html(dados);
});