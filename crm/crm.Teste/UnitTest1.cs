using crm.Dominio.ValueObjects;
using System;
using Xunit;

namespace crm.Teste
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var cpf = new TELEFONE("1198310796",ETipoTelefone.Celular);

            foreach (var item in cpf.Erros)
            {
                Console.WriteLine(item);
            }
            Assert.True(cpf.Validar());
        }
    }
}
