const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/country/code?code=br",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};
var dados;
$.ajax(settings).done(function (response) {
	console.log(response);
	dados = "<ul>";
	dados += "<li><b>Casos confirmados de covid no brasil = </b> "+response[0].confirmed+"</li>";
	dados += "<li><b>Casos críticos de covid no brasil = </b> "+response[0].critical+"</li>";
	dados += "<li><b>Mortes por covid no brasil = </b> "+response[0].critical+"</li>";	
	dados += "<li><b>Pessoas recuperados covid no brasil = </b> "+response[0].recovered+"</li>";		
	dados += "</ul>";
	$("#linha").html(dados);
});