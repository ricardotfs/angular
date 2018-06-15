﻿using crm.Dominio.ValueObjects;
using System;

namespace crm.Dominio.Entidades
{
    public class Contato: Base
    {
        public Contato(Nome nome, ESexo sexo, int idade, DateTime dataNascimento,
            TELEFONE telefoneComercial, TELEFONE telefoneCelular, TELEFONE telefoneResidencial,
            TELEFONE telefoneAdcional, EMAIL email, EMAIL email2, string rg, CPF cpf,
            Banco banco, Endereco enderecoPrincipal, Endereco enderecoComercial,
            RedesSociais redesSociais)
        {
            Nome = nome;
            Sexo = sexo;
            Idade = idade;
            DataNascimento = dataNascimento;
            TelefoneComercial = telefoneComercial;
            TelefoneCelular = telefoneCelular;
            TelefoneResidencial = telefoneResidencial;
            TelefoneAdcional = telefoneAdcional;
            Email = email;
            Email2 = email2;
            Rg = rg;
            Cpf = cpf;
            Banco = banco;
            EnderecoPrincipal = enderecoPrincipal;
            EnderecoComercial = enderecoComercial;
            RedesSociais = redesSociais;
        }

        public Nome Nome { get; private set; }
        public ESexo Sexo { get; private set; }
        public int Idade { get; private set; }
        public DateTime DataNascimento { get; private set; }
        public TELEFONE TelefoneComercial { get; private set; }
        public TELEFONE TelefoneCelular { get; private set; }
        public TELEFONE TelefoneResidencial { get; private set; }
        public TELEFONE TelefoneAdcional { get; private set; }
        public EMAIL Email { get; private set; }
        public EMAIL Email2 { get; private set; }
        public string Rg { get; private set; }
        public CPF Cpf { get; private set; }
        public Banco Banco { get; private set; }
        public Endereco EnderecoPrincipal { get; private set; }
        public Endereco EnderecoComercial { get; private set; }
        public RedesSociais RedesSociais { get; private set; }
    }
}