using System;
using System.Collections.Generic;
using System.Text;
using crm.Dominio.Command;
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
            if (_contatoRepositorio.ExisteCpf(dto.Cpf))
                return new CommandResult(false, "O Cpf ja está cadastrado");
   
            if (_contatoRepositorio.ExisteEmail(dto.Email))
                return new CommandResult(false, "O Email ja está cadastradoo");

            var nome = new Nome(dto.Nome, dto.SobreNome);
            var email1 = new EMAIL(dto.Email,ETipoEmail.Principal);
            var email2 = new EMAIL(dto.Email2,ETipoEmail.Secundario);
            var cpf = new CPF(dto.Cpf);
            var redesSociais = new RedesSociais(dto.Twitter, dto.Skype, dto.Youtube, dto.FaceBook, dto.GooglePlus, dto.Linkedin, dto.Instagram);

            var contato = new Contato(nome, dto.Sexo, dto.Idade, dto.DataNascimento, dto.TelefoneComercial,
                                        dto.TelefoneCelular, dto.TelefoneResidencial, dto.TelefoneAdicional,
                                        email1, email2, dto.Rg, cpf, null, null, null, redesSociais);

            if (!contato.Validar())
                return new CommandResult(false, "erro", contato.Erros);

            if (!cpf.Validar())
                return new CommandResult(false, "Erros na entidade", cpf.Erros);

            var id = _contatoRepositorio.Create(contato);

            return new CommandResult(true, "Contato criado com sucesso!", id);
        }

        public ICommandResult Update(ContatoDto dto)
        {
            if (!_contatoRepositorio.ExisteContato(dto.Id))
                return new CommandResult(false, "O Contato não existe");

            var nome = new Nome(dto.Nome, dto.SobreNome);
            var email1 = new EMAIL(dto.Email, ETipoEmail.Principal);
            var email2 = new EMAIL(dto.Email2, ETipoEmail.Secundario);
            var cpf = new CPF(dto.Cpf);

            var contato = new Contato(nome, dto.Sexo, dto.Idade, dto.DataNascimento, dto.TelefoneComercial,
                                        dto.TelefoneCelular, dto.TelefoneResidencial, dto.TelefoneAdicional,
                                        email1, email2, dto.Rg, cpf, null, null, null, null);

            if (!contato.Validar())
                return new CommandResult(false, "erro", contato.Erros);

            _contatoRepositorio.Update(contato);

            return new CommandResult(true, "Contato alterado com sucesso!");
        }
    }
}
