const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://atmosphere-methane-concentration.p.rapidapi.com/api/methane-api",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "atmosphere-methane-concentration.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	var dados = "";
	dados += "<div class='col-12 border'><h2>---</h2></div>";
	for(let i=400; i < response.methane.length; i++){							
		dados += "<div class='col-6 border'>";
		dados += "<h2>Data: "+response.methane[i].date+"</h2>";
		dados += "<p><b>Média:</b> "+response.methane[i].average+"</p>";
		dados += "<p><b>Unc médio:</b> "+response.methane[i].averageUnc+"</p>";
		dados += "<p><b>Tendência:</b> "+response.methane[i].trend+"</p>";
		dados += "<p><b>Tendência Unc:</b> "+response.methane[i].trendUnc+"</p>";
		dados += "</div>";
	}
	$("#linha").html(dados);
});