<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>API de Noticias tedk</title>
	<!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
	<?php 
		$hoje = date('d/m/Y');		
		$json_file = file_get_contents("https://apinoticias.tedk.com.br/api/?q=clima&date=".$hoje);

		$json_str = json_decode($json_file, true);
		$contador = count($json_str);
	?>
	<div class="container">
		<h1>Noticias do Dia</h1>
	<?php 		
		foreach($json_str['list'] as $noticias):		
	?> 		<div class='row'>
				<div class="col-12">
					<h2><?= $noticias['title']; ?></h2>		
					<p><?= $noticias['description']; ?></p>					
					<label><?= $noticias['datetime']; ?></label>
				</div>
			<div>		
	<?php 
		endforeach;
	?>
	</div>
	<!-- Option 2: Separate Popper and Bootstrap JS -->
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>	
</body>
</html>