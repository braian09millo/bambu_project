﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bambu.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class BambuEntities : DbContext
    {
        public BambuEntities()
            : base("name=BambuEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<horario> horarios { get; set; }
        public virtual DbSet<novedade> novedades { get; set; }
        public virtual DbSet<principal> principals { get; set; }
        public virtual DbSet<usuario> usuarios { get; set; }
        public virtual DbSet<actividade> actividades { get; set; }
    }
}
