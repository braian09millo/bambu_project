using Bambu.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data.Entity;

namespace Bambu.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class HorariosController : ApiController
    {
        private BambuEntities oEntity = new BambuEntities();

        [HttpGet]
        [Route("api/Horarios")]
        public List<Bambu.Models.horario> ObtenerHorariosBambu()
        {
            try
            {
                //CARGAMOS LA LISTA CON LOS HORARIOS CORRESPONDIENTES
                var oHorarios = oEntity.horarios.Where(h => h.hor_salon == "BAMBU")
                                            .OrderBy(h => h.hor_orden)
                                            .ToList();

                //RETORNAMOS LA LISTA
                return oHorarios;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Route("api/Horarios/Actividades")]
        public List<string> ObtenerActividades()
        {
            try
            {
                //RETORNAMOS LA LISTA DE ACTIVIDADES
                return oEntity.actividades.Select(a => a.act_descr).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        [Route("api/Horarios/AgregarActividad")]
        public string AgregarActividad([FromBody]string oActividad)
        {
            //INICIALIZAMOS LAS VARIABLES
            var sMensaje = default(string);

            try
            {
                using (oEntity)
                {
                    //VERIFICAMOS QUE NO SEA NULA O VACIA
                    if (!string.IsNullOrEmpty(oActividad))
                    {
                        //AGREGAMOS LA NUEVA ACTIVIDAD
                        oEntity.actividades.Add(new Bambu.Models.actividade() { act_descr = oActividad });
                        oEntity.SaveChanges();

                        //SETEAMOS EL MENSAJE DE RETORNO
                        sMensaje = "Actividad agregada correctamente";
                    }
                    else
                        sMensaje = "La actividad no puede ser nula o vacía";
                }
            }
            catch (Exception ex)
            {
                sMensaje = ex.Message;
            }

            //RETORNAMOS EL MENSAJE
            return sMensaje;
        }

        [HttpPost]
        [Route("api/Horarios/Modificar")]
        public string ModificarHorarios([FromBody]HorarioModel oHorario)
        {
            //INICIALIZAMOS LAS VARIABLES
            var sMensaje = default(string);

            try
            {
                using (oEntity)
                {
                    //OBTENEMOS LA FILA SELECCIONADA
                    var oFilaSeleccionada = oEntity.horarios
                                                   .FirstOrDefault(h => h.hor_orden == oHorario.Orden &&
                                                                        h.hor_salon == oHorario.Salon);

                    //VERIFICAMOS EL DIA Y ACTUALIZAMOS
                    switch (oHorario.Dia)
                    {
                        case "Lunes":
                            {
                                oFilaSeleccionada.hor_activ1 = oHorario.Actividad;
                                oFilaSeleccionada.hor_horin1 = oHorario.HoraInicio;
                                oFilaSeleccionada.hor_horfi1 = oHorario.HoraFinal;
                                break;
                            }
                        case "Martes":
                            {
                                oFilaSeleccionada.hor_activ2 = oHorario.Actividad;
                                oFilaSeleccionada.hor_horin2 = oHorario.HoraInicio;
                                oFilaSeleccionada.hor_horfi2 = oHorario.HoraFinal;
                                break;
                            }
                        case "Miércoles":
                            {
                                oFilaSeleccionada.hor_activ3 = oHorario.Actividad;
                                oFilaSeleccionada.hor_horin3 = oHorario.HoraInicio;
                                oFilaSeleccionada.hor_horfi3 = oHorario.HoraFinal;
                                break;
                            }
                        case "Jueves":
                            {
                                oFilaSeleccionada.hor_activ4 = oHorario.Actividad;
                                oFilaSeleccionada.hor_horin4 = oHorario.HoraInicio;
                                oFilaSeleccionada.hor_horfi4 = oHorario.HoraFinal;
                                break;
                            }
                        case "Viernes":
                            {
                                oFilaSeleccionada.hor_activ5 = oHorario.Actividad;
                                oFilaSeleccionada.hor_horin5 = oHorario.HoraInicio;
                                oFilaSeleccionada.hor_horfi5 = oHorario.HoraFinal;
                                break;
                            }
                        case "Sábado":
                            {
                                oFilaSeleccionada.hor_activ6 = oHorario.Actividad;
                                oFilaSeleccionada.hor_horin6 = oHorario.HoraInicio;
                                oFilaSeleccionada.hor_horfi6 = oHorario.HoraFinal;
                                break;
                            }
                    }

                    //COMITTEAMOS LOS CAMBIOS REALIZADOS
                    oEntity.SaveChanges();

                    //SETEAMOS EL MENSAJE DE RETORNO
                    sMensaje = "Horario modificado correctamente";

                }
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
