var app = angular.module('EmailApp', []);

app.controller('EmailController', function($scope, $http) {

$scope.mostrarMensaje = false;

$scope.ocultarMensaje = function() {
    $scope.mostrarMensaje = false;
}

function Limpiar() {
    $scope.nombre = '';
    $scope.apellido = '';
    $scope.email = '';
    $scope.consulta = '';
}

$scope.enviarMail = function () {

    var email = {

        nombre: $scope.nombre,
        apellido: $scope.apellido,
        mail: $scope.email,
        mensaje: $scope.consulta

    }

    $http
    (
        {
            method: 'POST',
            url:'../templates/enviarMail.php',
            data: JSON.stringify(email),
            dataType: "json",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
    )
    .then(function(data, status) {
        console.log(data);
        console.log(status);
        // mostrarMensaje = true;
        alert("Gracias! Nos pondremos en contacto con usted a la brevedad");
        Limpiar();
    }, function(data, status) {
        // mostrarMensaje = true;
        alert("Hubo un error. Intente más tarde...");
    });

}

});