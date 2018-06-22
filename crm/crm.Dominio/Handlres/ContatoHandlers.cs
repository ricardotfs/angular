using System;
using System.Collections.Generic;
using System.Text;
using crm.Dominio.Dto;
using crm.Dominio.Entidades;
using crm.Dominio.Repository;
using crm.Dominio.ValueObjects;

namespace crm.Dominio.Handlres
{
    public class ContatoHandlers : IHandler<ContatoDto>
    {
        private readonly IContatoRepositorio _contatoRepositorio;

        public ContatoHandlers(IContatoRepositorio contatoRepositorio)
        {
            _contatoRepositorio = contatoRepositorio;
        }
        public ICommandResult Create(ContatoDto dto)
        {
            if (!dto.Validar())
                return new CommandResult(false, "Erros no dto", dto.Erros);

            if (_contatoRepositorio.ExisteCpf(dto.Cpf))
                return new CommandResult(false, "O Cpf ja está cadastrado");
   
            if (_contatoRepositorio.ExisteEmail(dto.Email))
                return new CommandResult(false, "O Email ja está cadastradoo");

            var nome = new Nome(dto.Nome, dto.SobreNome);
            var telComercial = new TELEFONE(dto.TelefoneComercial, ETipoTelefone.Fixo);
            var telCelular = new TELEFONE(dto.TelefoneComercial, ETipoTelefone.Celular);
            var telResidencial = new TELEFONE(dto.TelefoneComercial, ETipoTelefone.Fixo);
            var tipoTelAdic = dto.TelefoneComercial != null && dto.TelefoneComercial.Length > 10 ? ETipoTelefone.Fixo : ETipoTelefone.Celular;
            var telAdcional = new TELEFONE(dto.TelefoneComercial, tipoTelAdic);
            var email1 = new EMAIL(dto.Email);
            var email2 = new EMAIL(dto.Email2 ?? string.Empty);
            var cpf = new CPF(dto.Cpf);

            var contato = new Contato(nome, dto.Sexo, dto.Idade, dto.DataNascimento,
                                        telComercial, telCelular, telResidencial, telAdcional,
                                        email1, email2, dto.Rg, cpf, null, null, null, null);

            if(!cpf.Validar())
                return new CommandResult(false, "Erros na entidade", cpf.Erros);

            return new CommandResult(true, "Contato criado com sucesso!");
        }
    }
}
