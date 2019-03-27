<?php
// captura de variables
$nombre=$_POST['nombre']; //mediante el metodo post busca el campo nombre
$email=$_POST['email'];
$consulta=$_POST['consulta'];
$sexo=$_POST['sexo'];
$actividades=$_POST['actividades'];
$continente=$POST['continente'];

// cuerpo del email
$mensaje="
<strong>Nombre:</strong> $nombre<br /><br />
<strong>Email:</strong> $email<br /><br />
<strong>Consulta:</strong> $consulta<br /><br />
<strong>Sexo:</strong> $sexo<br /><br />
<strong>Actividades:</strong> $actividades<br /><br />
<strong>Continente:</strong> $continente<br /><br />
";

// envío del email
mail("micorreo@midominio.com", "Consulta Web", $mensaje, "From: $nombre <$mail>\nReply-To:$mail\nContent-Type: text/html; charset=utf-8\n"); 
//va a enviar el correo y se va a
header ("Location: http://"); //esta pagina
?>

