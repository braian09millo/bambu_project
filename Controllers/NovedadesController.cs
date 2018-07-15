using Bambu.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Bambu.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class NovedadesController : ApiController
    {
        private BambuEntities oEntity = new BambuEntities();

        [HttpGet]
        [Route("api/Novedades")]
        public Bambu.Models.novedade ObtenerNovedades()
        {
            try
            {
                //RETORNAMOS EL UNICO REGISTRO EXISTENTE
                return oEntity.novedades.FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        [Route("api/Novedades")]
        public string ModificarNovedades([FromBody]NovedadesModel oNovedades)
        {
            //INICIALIZAMOS LAS VARIABLES
            string sMensaje = default(string);

            try
            {
                using (oEntity)
                {
                    //OBTENEMOS EL UNICO REGISTRO EXISTENTE
                    var oNovedad = oEntity.novedades.FirstOrDefault();

                    //ACTUALIZAMOS EL REGISTRO
                    oNovedad.nov_titulo = oNovedades.Titulo;
                    oNovedad.nov_titulo2 = oNovedades.Titulo2;
                    oNovedad.nov_descr = oNovedades.Descripcion;

                    //COMITTEAMOS LOS CAMBIOS
                    oEntity.SaveChanges();
                }

                //SETEAMOS EL MENSAJE DE RETORNO
                sMensaje = "Novedades modificadas correctamente";
            }
            catch (Exception ex)
            {
                //SETEAMOS EL MENSAJE DE ERROR
                sMensaje = ex.Message;
            }

            //RETORNAMOS EL MENSAJE
            return sMensaje;
        }

        [HttpPost]
        [Route("api/Novedades/Imagenes")]
        public string SubirImagenes()
        {
            //INICIALIZAMOS LAS VARIABLES
            string sMensaje = default(string);
            string sPath = default(string);
            string sFotoAnterior = default(string);
            int iContador = default(int);

            try
            {
                //OBTENEMOS LA RUTA DONDE GUARDAR LAS IMAGENES
                sPath = HostingEnvironment.MapPath("~/Recursos/");

                //OBTENEMOS LOS ARCHIVOS GUARDADOS EN EL FORM-DATA
                var oArchivos = HttpContext.Current.Request.Files;

                //RECORREMOS CADA UNO DE LOS ARCHIVOS
                for (int i = 0; i <= oArchivos.Count - 1; i++)
                {
                    //ASIGNAMOS CADA ARCHIVO A UN OBJETO 
                    HttpPostedFile oImagen = oArchivos[i];

                    if (oImagen.ContentLength > 0)
                    {
                        //VERIFICAMOS QUE NO EXISTA EL ARCHIVO EN EL DIRECTORIO
                        if (!File.Exists(sPath + Path.GetFileName(oImagen.FileName)))
                        {
                            //GUARDAMOS FISICAMENTE LA IMAGEN
                            oImagen.SaveAs(sPath + Path.GetFileName(oImagen.FileName));
                            iContador++;

                            //ACTUALIZAMOS EL REGISTRO EN LA BD
                            var oNovedad = oEntity.novedades.FirstOrDefault();
                            sFotoAnterior = Path.GetFileName(oNovedad.nov_imagen);
                            oNovedad.nov_imagen = Path.GetFileName(oImagen.FileName);
                            oEntity.SaveChanges();
                        }
                    }
                }

                //BORRAMOS LA FOTO ANTERIOR PARA NO HACER PESADA LA CARPETA DE IMAGENES
                if (File.Exists(sPath + Path.GetFileName(sFotoAnterior)))
                    File.Delete(sPath + Path.GetFileName(sFotoAnterior));

                //SETEAMOS EL MENSAJE DE RETORNO
                if (iContador > 0)
                    sMensaje = iContador.ToString() + " Archivo(s) agregados correctamente";
                else
                    sMensaje = "No se han seleccionado archivo(s)";
            }
            catch (Exception ex)
            {
                sMensaje = ex.Message;
            }

            //DEVOLVEMOS EL MENSAJE
            return sMensaje;
        }
    }
}
