<?php
  $nombre = htmlspecialchars($_POST['nombre']);
  $apellido = htmlspecialchars($_POST['apellido']);
  $email = htmlspecialchars($_POST['email']);
  $mensaje = htmlspecialchars($_POST['mensaje']);
  $destino = "braian09.millo@gmail.com";
  $contenido = "Asunto: Consulta"
              . "\nNombre: " . $nombre
              . "\nApellido: ". $apellido
              . "\nEmail: " . $email
              ."\nMensaje: " . $mensaje;
  if(mail($destino,"Contacto",$contenido)) {
    header("Location:contacto.html");
  } else {
    echo "<script>alert('No se pudo enviar el mensaje')</script>";
  }
?>