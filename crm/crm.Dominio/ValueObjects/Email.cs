using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace crm.Dominio.ValueObjects
{
    public class EMAIL : Base
    {
        public EMAIL(string email,ETipoEmail tipoEmail)
        {
            if (string.IsNullOrWhiteSpace(email) || !EmailValido(email)) { Erros.Add($"EMAIL.Email {tipoEmail.ToString()} inválido."); }

            Email = email;
        }
        public string Email { get; private set; }
        private bool EmailValido(string email)
        {
            var rg = new Regex(@"^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$");
            return rg.IsMatch(email);
        }
    }
}
