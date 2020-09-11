using System;
using System.Collections.Generic;
using Domain.Commands;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Test.Commands
{
    [TestClass]
    public class FormularioCommandTest
    {
        [TestMethod]
        public void DeverGerarErroQuandoForInvalido()
        {
            var command = new FormularioCommand();
            command.Campos = new List<CampoCommand>();

            command.Validate();

            Assert.AreEqual(false, command.Valid);
        }
    }
}
