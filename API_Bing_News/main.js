const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-news-search1.p.rapidapi.com/news/search?q=Ecologia&freshness=Day&textFormat=Raw&safeSearch=Off",
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
	}
};
$.ajax(settings).done(function (response) {
	console.log(response.value);
	for(let i=0; i <= 6; i++){
		console.log(response.value[i].url);		
		document.getElementById("linha").innerHTML += "<h2>"+response.value[i].name+"</h2>";
		document.getElementById("linha").innerHTML += "<p>"+response.value[i].description+"</p>";
		document.getElementById("linha").innerHTML += "<img src='"+response.value[i].image.thumbnail.contentUrl+"' style='width:100px; heigth:'100px'>";
		document.getElementById("linha").innerHTML += "Fonte: <a href='"+response.value[i].url+"'>"+response.value[i].url+"</a>";
	}
});