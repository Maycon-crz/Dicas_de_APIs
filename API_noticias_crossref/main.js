const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://crossref.p.rapidapi.com/?query=ecology",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "crossref.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	var dados;
	for(let i=0; i < response.message.items.length; i++){					
		dados += "<h2>"+response.message.items[i].title[0]+"</h2>";
		dados += "<p>"+response.message.items[i].abstract+"</p>";
		dados += "<a target='_blank' href='"+response.message.items[i].URL+"'>"+response.message.items[i].URL+"</a>";		
	}
	$("#linha").html(dados);
});