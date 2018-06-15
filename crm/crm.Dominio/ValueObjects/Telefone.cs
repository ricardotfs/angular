using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace crm.Dominio.ValueObjects
{
    public class TELEFONE : Base
    {
        public TELEFONE(string telefone, ETipoTelefone tipoTelefone)
        {
            if (string.IsNullOrWhiteSpace(telefone)) { Erros.Add("TELEFONE.Telefone campo obrigatório."); }

            Telefone = telefone;
            TipoTelefone = tipoTelefone;
        }
        public string Telefone { get; private set; }
        public ETipoTelefone TipoTelefone { get; private set; }
        
    }
}
