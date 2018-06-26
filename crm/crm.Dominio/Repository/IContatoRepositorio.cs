using crm.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.Repository
{
    public interface IContatoRepositorio
    {
        bool ExisteCpf(string cpf);
        bool ExisteEmail(string email);
        int Create(Contato contato);
        bool ExisteContato(int id);
        void Update(Contato contato);
    }
}
