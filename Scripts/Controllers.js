/// <reference path="angular.min.js" />
app.controller('IndexController', function ($scope) {

    $scope.esHome = true;
    $scope.cambiarBodyClass = function (clase, esHome) {

        $scope.fondo = clase;
        $scope.esHome = esHome;
    }

});

app.controller('HomeController', function () {


});

app.controller('NovedadesController', function ($scope, NovedadesService) {

    $scope.novedad = {};
    ObtenerNovedades();

    function ObtenerNovedades() {
        var respuesta = NovedadesService.ObtenerNovedades();
        respuesta
            .then(function (response) {
                console.log(response.data);
                $scope.novedad = response.data;
            }, function (error) {
                console.log(error.data);
            });
    }

});

app.controller('ContactoController', function () {


});

app.controller('HorariosController', function ($scope, HorariosService) {

    //INICIALIZAMOS LAS VARIABLES GLOBALES
    $scope.horariosBambu = [];

    getHorariosBambu();

    function getHorariosBambu()
    {
        var respuesta = HorariosService.ObtenerHorariosBambu();
        respuesta
            .then(function (response) {
                $scope.horariosBambu = response.data;
            },
            function (response) {
                alert('No se pudo obtener los horarios');
                console.log(response.data);
            });
    }
});

app.controller('LoginController', function ($scope, $location, LoginService) {

    $scope.mensajeError = "";
    $scope.mostrarError = false;
    $scope.loading = false;

    $scope.ValidarLogin = function () {

        $scope.loading = true;

        var oUsuario =
        {
            Usuario: $scope.usuario,
            Password: $scope.pass
        };

        var respuesta = LoginService.ValidarLogin(oUsuario);
        respuesta
            .then(function (response) {
                console.log(response.data);
                $location.path('/edicion');
                $scope.loading = false;
            }, function (error) {
                console.log(error.data);
                $scope.loading = false;
                $scope.mensajeError = error.data;
                $scope.mostrarError = true;
            });

    }
});

app.controller('EdicionController', function ($scope, EdicionService) {

    /************************HORARIOS************************/

    ObtenerActividades();

    function LimpiarDatos() {

        $scope.filaSeleccionada = null;
        $scope.actSeleccionada = null;
        $scope.diaSeleccionado = null;
        $scope.horaFin = '';
        $scope.horaInicio = '';
        $scope.salonSeleccionado = null;
        $scope.HorariosForm.$setPristine();
    }

    function ObtenerActividades() {

        var respuesta = EdicionService.ObtenerActividades();
        respuesta
            .then(function (response) {
                $scope.actividades = response.data;
            }, function (error) {
                console.log(error.data);
            });
    }

    $scope.AgregarActividad = function () {

        var actividad = $scope.actividad;

        var respuesta = EdicionService.AgregarActividad(actividad);
        respuesta
            .then(function (response) {
                alert(response.data);
                ObtenerActividades();
            }, function (error) {
                alert(error.data);
            });

        $scope.actividad = '';
    }

    $scope.ModificarHorarios = function () {

        var oHorario = {

            Orden: $scope.filaSeleccionada,
            HoraInicio: $scope.horaInicio,
            HoraFinal: $scope.horaFin,
            Dia: $scope.diaSeleccionado,
            Actividad: $scope.actSeleccionada == null ? '--' : $scope.actSeleccionada,
            Salon: $scope.salonSeleccionado
        }

        var respuesta = EdicionService.ModificarHorarios(oHorario);
        respuesta
            .then(function (response) {
                alert(response.data);
            }, function (error) {
                alert(error.data);
            });

        LimpiarDatos();
    }

    /************************FIN HORARIOS************************/

    /*************************NOVEDADES**************************/

    function LimpiarDatosNovedades() {

        $scope.titulo1 = '';
        $scope.titulo2 = '';
        $scope.descripcion = '';
        $scope.NovedadesForm.$setPristine();
    }

    var formdata = new FormData();
    $scope.getTheFiles = function ($files) {
        angular.forEach($files, function (value, key) {
            formdata.append(key, value);
        });
    };

    $scope.GuardarImagen = function () {        

        var respuesta = EdicionService.SubirImagenes(formdata);
        respuesta
            .then(function (response) {
                console.log(response.data);
                alert(response.data);
                $('#file').val('');
            }, function (error) {
                console.log(error.data);
            });
    }

    $scope.ModificarNovedades = function () {

        var oNovedad = {

            Titulo: $scope.titulo1,
            Titulo2: $scope.titulo2,
            Descripcion: $scope.descripcion
        }

        var respuesta = EdicionService.ModificarNovedades(oNovedad);
        respuesta
            .then(function (response) {
                alert(response.data);
            }, function (error) {
                alert(error);
            });

        LimpiarDatosNovedades();
    }

    /*************************FIN NOVEDADES**************************/
});