using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bambu.Models
{
    public class HorarioModel
    {
        public int Identity { get; set; }
        public int Orden { get; set; }
        public string Dia { get; set; }
        public string Actividad { get; set; }
        public string HoraInicio { get; set; }
        public string HoraFinal { get; set; }
        public string ColorLabel { get; set; }
        public string Salon { get; set; }
    }
}