/// <reference path="angular.min.js" />
app.service('HorariosService', function ($http) {

    this.ObtenerHorariosBambu = function () {

        var response =
        $http
        ({
            method: 'GET',
            url: 'http://localhost:51904/api/Horarios'
        });
        return response;
    }
});

app.service('NovedadesService', function ($http) {

    this.ObtenerNovedades = function () {

        var response =
        $http
        ({
            method: 'GET',
            url: 'http://localhost:51904/api/Novedades'
        });
        return response;
    }

});

app.service('LoginService', function ($http) {

    this.ValidarLogin = function (oUsuario) {

        var response =
        $http
        ({
            method: 'POST',
            url: 'http://localhost:51904/api/Usuario/Login',
            data: JSON.stringify(oUsuario),
            dataType: 'json'
        });
        return response;
    }
});

app.service('EdicionService', function ($http) {

    this.ObtenerActividades = function () {

        var response =
        $http
        ({
            method: 'GET',
            url: 'http://localhost:51904/api/Horarios/Actividades'
        });
        return response;
    }

    this.AgregarActividad = function (oActividad) {

        var response =
        $http
        ({
            method: 'POST',
            url: 'http://localhost:51904/api/Horarios/AgregarActividad',
            data: JSON.stringify(oActividad),
            dataType: 'json'
        });
        return response;
    }

    this.ModificarHorarios = function (oHorario) {

        var response =
        $http
        ({
            method: 'POST',
            url: 'http://localhost:51904/api/Horarios/Modificar',
            data: JSON.stringify(oHorario),
            dataType: 'json'
        });
        return response;
    }

    this.SubirImagenes = function (formData) {

        var response =
        $http
        ({
            method: 'POST',
            url: 'http://localhost:51904/api/Novedades/Imagenes',
            data: formData,
            headers: {
                'Content-Type': undefined
            }
        });
        return response;

    }

    this.ModificarNovedades = function (oNovedad) {

        var response =
        $http
        ({
            method: 'POST',
            url: 'http://localhost:51904/api/Novedades',
            data: JSON.stringify(oNovedad),
            dataType: 'json'
        });
        return response;
    }

});