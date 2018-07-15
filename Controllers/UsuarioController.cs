using Bambu.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Bambu.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsuarioController : ApiController
    {
        private BambuEntities oEntity = new BambuEntities();

        [HttpPost]
        [Route("api/Usuario/Login")]
        public string ValidarLogin([FromBody]UsuarioModel oUsuario)
        {
            //INICIALIZAMOS LAS VARIABLES
            var sMensaje = default(string);

            try
            {
                //OBTENEMOS EL USUARIO
                var _usuario = oEntity.usuarios.FirstOrDefault(u => u.usu_user == oUsuario.Usuario);

                //VERIFICAMOS QUE NO SEA NULO
                if (_usuario != null)
                {
                    //VERIFICAMOS QUE COINCIDA LA CONTRASEÑA
                    if (_usuario.usu_pass == oUsuario.Password)
                        sMensaje = "Ingreso correcto";
                    else
                        sMensaje = "Contraseña incorrecta";
                }
                else
                    sMensaje = "El usuario ingresado no existe";
                                
            }
            catch (Exception ex)
            {
                sMensaje = ex.Message;
            }

            //RETORNAMOS EL MENSAJE
            return sMensaje;
        }
    }
}
