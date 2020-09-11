﻿using System;
using System.Collections.Generic;
using Domain.Commands;
using Domain.Enums;
using Domain.Handlers;
using Domain.ValueObjects;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Test.Mocks;

namespace Test.Handler
{
    [TestClass]
    public class FormularioHandlersTest
    {
        [TestMethod]
        public void QuandoFormularioNaotiverCamposdeverRetornarErro()
        {
            var handler = new FormularioHandlers(new FakeFormularioRepository());
            var command = new FormularioCommand();

            command.Campos = new List<CampoCommand>();
            handler.Handler(command);

            Assert.AreEqual(false, handler.Valid);
        }

        [TestMethod]
        public void QuandoFormularioComCampoTipoComboTemItensComMesmoNomeDeveRetornarErro()
        {
            var handler = new FormularioHandlers(new FakeFormularioRepository());
            var command = new FormularioCommand();

            var campoCommand = new CampoCommand();
            campoCommand.Nome = "Teste Nome";
            campoCommand.TipoCampo = TipoCampo.Combo;
            campoCommand.Valor = "Teste Valor";
            campoCommand.Descricao = "Teste Descricao";
            campoCommand.Obrigatorio = true;
            campoCommand.Items = new List<string>() { "Selecione", "São Paulo", "Rio de Janeiro" };

            command.Campos = new List<CampoCommand>();
            command.Campos.Add(campoCommand);
            command.Campos.Add(campoCommand);

            var result = handler.Handler(command);

            Assert.AreEqual(false, result.Success);
        }
    }
}
