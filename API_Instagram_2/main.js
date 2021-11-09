$(".btn").click(function(){
	$("#linha").html("<div class='col-12 border'><h1 class='text-secondary'>Carregando contas relacionandas a "+$(this).val()+"...</h1></div>");
	buscando($(this).val());
});
function buscando(parametro){
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_tag?tag="+parametro+"&feed_type=recent&corsEnabled=true",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
			"x-rapidapi-key": "Encontre a chave no RapidAPI e coloque aqui!"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		var dados = "";
		dados += "<div class='col-12 border'><h2>----</h2></div>";
		for(let i=0; i < 6; i++){							
			dados += "<div class='col-4 border'>";
			dados += "<h6>"+response.data[i].caption.user.full_name+"</h6>";
			dados += "<p>username: "+response.data[i].caption.user.username+"</p>";
			dados += "<p>"+response.data[i].caption.text+"</p>";
			dados += "<a href='https://www.instagram.com/"+response.data[i].caption.user.username+"' target='_blank'>https://www.instagram.com/"+response.data[i].caption.user.username+"</a>";
			dados += "</div>";
		}
		$("#linha").html(dados);
	});

}