using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio
{
    public class Base
    {
        public List<string> Erros { get; protected set; } = new List<string>();

        public bool Validar()
        {
            return Erros.Count == 0 ? true : false;
        }
        protected List<string> AddErros(params Base[] param)
        {
            foreach (var item in param)
            {
                if(item != null)
                Erros.AddRange(item.Erros);
            }
            return Erros;
        }
    }
}
