using System;
using System.Collections.Generic;
using System.Text;
using crm.Dominio.Dto;
using crm.Dominio.Entidades;
using crm.Dominio.Repository;

namespace crm.Dominio.Handlres
{
    public class ContatoHandlers : IHandler<ContatoDto>
    {
        private readonly IContatoRepositorio _contatoRepositorio;

        public ContatoHandlers(IContatoRepositorio contatoRepositorio)
        {
            _contatoRepositorio = contatoRepositorio;
        }
        public ICommand Create(ContatoDto contato)
        {
            if (!contato.Validar())
                return contato;

            if (_contatoRepositorio.ExisteCpf(contato.Cpf))
            {
                contato.Erros.Add("O Cpf ja está cadastrado");
                return contato;
            }
            if (_contatoRepositorio.ExisteEmail(contato.Email))
            {
                contato.Erros.Add("O Email ja está cadastrado");
                return contato;
            }
            return contato;
        }
    }
}
