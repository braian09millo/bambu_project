var app = angular.module('EmailApp', []);

app.controller('EmailController', function($scope, $http) {

var mostrarMensaje = false;

$scope.ocultarMensaje = function() {
    mostrarMensaje = false;
}

$scope.enviarMail = function () {

    $http
    (
        {
            method: 'POST',
            url:'enviarMail.php',
            data: 'nombre=' + $scope.nombre + '&email=' + $scope.email + '&consulta=' + $scope.consulta,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
    )
    .then(function(data, status) {
        console.log(data);
        console.log(status);
        mostrarMensaje = true;
        $scope.mensaje = "Gracias! Nos pondremos en contacto con usted a la brevedad";
    }, function(data, status) {
        mostrarMensaje = true;
        $scope.mensaje = "Hubo un error. Intente más tarde...";
    });

}

});