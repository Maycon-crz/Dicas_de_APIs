const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://melted-polar-ice-cap.p.rapidapi.com/api/arctic-api",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "melted-polar-ice-cap.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	var dados;
	dados += "<div class='col-12 border'><h2>---</h2></div>";
	for(let i=0; i < response.result.length; i++){							
		dados += "<div class='col-6 border'>";
		dados += "<h2>Ano: "+response.result[i].year+"</h2>";
		dados += "<p>Área: "+response.result[i].area+"</p>";
		dados += "<p>Extensão: "+response.result[i].extent+"</p>";
		dados += "</div>";
	}
	$("#linha").html(dados);
});