<?php
  $nombre = htmlspecialchars($_POST['nombre']);
  $apellido = htmlspecialchars($_POST['apellido']);
  $email = htmlspecialchars($_POST['email']);
  $mensaje = htmlspecialchars($_POST['mensaje']);
  $destino = "braian09.millo@gmail.com";
  $headers = "From: $email \r\n";
  $contenido = "Asunto: Consulta"
              . "\nNombre: " . $nombre
              . "\nApellido: ". $apellido
              . "\nEmail: " . $email
              ."\nMensaje: " . $mensaje;
  mail($destino,"Contacto",$contenido);
?>