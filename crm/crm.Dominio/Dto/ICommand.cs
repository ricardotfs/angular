using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.Dto
{
    public interface ICommand
    {
        int Id { get; set; }
        bool Validar();
        ICollection<string> Erros { get; set; }
    }
}
