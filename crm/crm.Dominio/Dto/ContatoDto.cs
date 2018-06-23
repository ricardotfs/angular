﻿using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.Dto
{
    public class ContatoDto : ICommand
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public ESexo Sexo { get; set; }
        public int Idade { get; set; }
        public DateTime DataNascimento { get; set; }
        public string TelefoneComercial { get; set; }
        public string TelefoneCelular { get; set; }
        public string TelefoneResidencial { get; set; }
        public string TelefoneAdicional { get; set; }
        public string Email { get; set; }
        public string Email2 { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string NumeroBanco { get; set; }
        public string Agencia { get; set; }
        public string Conta { get; set; }
        public string CepResidencial { get; set; }
        public string LogradouroResidencial { get; set; }
        public string NumeroResidencial { get; set; }
        public string ComplementoResidencial { get; set; }
        public string BairroResidencial { get; set; }
        public string Residencial { get; set; }
        public string EstadoResidencial { get; set; }
        public string PaisResidencial { get; set; }
        public ICollection<string> Erros { get; set; } = new List<string>();

        public bool Validar()
        {
            if (string.IsNullOrWhiteSpace(Nome)) { Erros.Add("Nome campo obrigatório."); }

            return Erros.Count == 0 ? true : false;
        }
    }
}