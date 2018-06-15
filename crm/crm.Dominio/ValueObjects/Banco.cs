using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.ValueObjects
{
    public class Banco:Base
    {
        public Banco(string numeroBanco, string agencia, string conta)
        {
            NumeroBanco = numeroBanco;
            Agencia = agencia;
            Conta = conta;
        }

        public string NumeroBanco { get; private set; }
        public string Agencia { get; private set; }
        public string Conta { get; private set; }
    }
}
