<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>API CocktailDB</title>
	<!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<div class="row border">
			<h1 class="text-success">API -Banco de dados de receitas de bebidas e coquetéis de todo o mundo.</h2>
		</div>
		<div class="row">

			<?php 		

				//Site: https://www.thecocktaildb.com/api.php
				//Possível usar vários tipos de pesquisa

				$drink = "margarita";
				$json_file = file_get_contents("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".$drink);

				$json_str = json_decode($json_file, true);				
				// echo "<pre>";
				// var_dump($json_str);
				// echo "</pre>";
				// echo "<hr>";	
				
				$instrucoes = $json_str['drinks'][0]['strInstructions'];

				$headers =  array(
				    "Content-type: application/json",
				    "Authorization: Basic ". base64_encode("Encontre a chave no RapidAPI e coloque aqui!")
				);

				$data_array = array();
				$texto_a_ser_traduzido = $instrucoes;
				$data_array ["T"] = $texto_a_ser_traduzido;
				$data_array ["SL"] = "EnUs";
				$data_array ["TL"] = "PtBr";
				$data = json_encode($data_array );


				$options = array (
				    'http' => array (
				        'header' => $headers,
				        'method' => 'POST',
				        'content' => $data
				    )
				);
				$context  = stream_context_create ($options);
				$result = file_get_contents ('https://api.gotit.ai/Translation/v1.1/Translate', false, $context);


				$result = json_decode($result, true);
			?> 		
			<div class="container">
				<div class="row">
					<h2><?= $json_str['drinks'][0]['strDrink']; ?></h2>
					<p><?= $result['result']; ?></p>
				</div>
			</div>
		</div>	
	</div>
	<script src="main.js"></script>
	<!-- Option 2: Separate Popper and Bootstrap JS -->
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>