using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.Handlres
{
    public interface ICommandResult
    {
        ICollection<string> Erros { get; set; }
    }
}
