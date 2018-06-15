using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio
{
    public class Base
    {
        public ICollection<string> Erros { get; protected set; } = new List<string>();

        public bool Validar()
        {
            return Erros.Count == 0 ? true : false;
        }
    }
}
