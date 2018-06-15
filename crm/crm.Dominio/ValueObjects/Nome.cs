using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.ValueObjects
{
    public class Nome:Base
    {
        public Nome(string primeiroNome, string sobrenome)
        {
            if (string.IsNullOrWhiteSpace(primeiroNome)) { Erros.Add("Nome.PrimeiroNome campo obrigatório."); }
            if (string.IsNullOrWhiteSpace(sobrenome)) { Erros.Add("Nome.Sobrenome campo obrigatório."); }

            PrimeiroNome = primeiroNome;
            Sobrenome = sobrenome;
        }

        public string PrimeiroNome { get; private set; }
        public string Sobrenome { get; private set; }
    }
}
