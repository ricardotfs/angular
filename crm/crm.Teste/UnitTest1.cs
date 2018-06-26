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
        private FakeContatoRepositorio _repositorio;

        public UnitTest1()
        {
            _repositorio = new FakeContatoRepositorio();
        }
        [Fact]
        public void CriarContato()
        {
            try
            {
                var dto = new ContatoDto();
                dto.Nome = "Ricardo";
                dto.SobreNome = "Oliveira";
                dto.Cpf = "11690048492";
                dto.Email = "ricardo@gvp.com";
                dto.Email2 = "maria@gvp.com";

                IHandler<ContatoDto> handler = new ContatoHandlers(_repositorio);
                var result = handler.Create(dto);

                Assert.True(result.Erros.Count == 0);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Fact]
        public void AlterarContato()
        {
            try
            {
                var dto = new ContatoDto();
                dto.Id = 10;
                dto.Nome = "Ricardo";
                dto.SobreNome = "Oliveira";
                dto.Cpf = "11690048492";
                dto.Email = "ricardo@gvp.com";
                dto.Email2 = "maria@gvp.com";

                IHandler<ContatoDto> handler = new ContatoHandlers(_repositorio);
                var result = handler.Update(dto);

                Assert.True(result.Erros.Count == 0);
            }
            catch (Exception ex)
            {
                throw ex;
            }         
        }

        private class FakeContatoRepositorio : IContatoRepositorio
        {
            public int Create(Contato contato)
            {
                return 10;
            }

            public bool ExisteContato(int id)
            {
                return true;
            }

            public bool ExisteCpf(string cpf)
            {
                return false;
            }

            public bool ExisteEmail(string email)
            {
                return false;
            }

            public void Update(Contato contato)
            {
            }
        }
    }
}
