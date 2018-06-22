using crm.Dominio.Dto;
using crm.Dominio.Entidades;
using crm.Dominio.Handlres;
using crm.Dominio.Repository;
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
            var repositorio = new ContatoRepositorio();
            var dto = new ContatoDto();
            dto.Nome = "Ricardo";
            dto.Cpf = "234234ewr";
            dto.Email = "ricardo@gvp.com";

            var handler = new ContatoHandlers(repositorio);
            var result = handler.Create(dto);

            Assert.True(result.Erros.Count == 0);
        }

        class ContatoRepositorio : IContatoRepositorio
        {
            public bool ExisteCpf(string cpf)
            {
                return false;
            }

            public bool ExisteEmail(string email)
            {
                return false;
            }
        }
    }
}
