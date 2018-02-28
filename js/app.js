var app = angular.module('EmailApp', []);

app.controller('EmailController', function($scope, $http) {

var mostrarMensaje = false;

$scope.enviarMail = function () {

    $http
    (
        {
            method: 'POST',
            url:'../enviar-mail.php',
            data: 'nombre=' + $scope.nombre + '&email=' + $scope.email + '&consulta=' + $scope.consulta,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
    )
    .success(function(data, status) {
        $scope.mensaje = "Gracias! Nos pondremos en contacto con usted a la brevedad";
        mostrarMensaje = true;
    })
    .error(function(data, status) {
        $scope.mensaje = "Hubo un error. Intente más tarde...";
    })

}

});