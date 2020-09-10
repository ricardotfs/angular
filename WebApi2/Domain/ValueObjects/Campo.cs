using Domain.Enums;
using Flunt.Validations;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;

namespace Domain.ValueObjects
{
    public class Campo : ValueObject
    {
        private IList<Item> _itens;
        public Campo(int id, string nome, TipoCampo tipoCampo, string valor, string descricao, bool obrigatorio)
        {
            Id = id;
            Nome = nome;
            TipoCampo = tipoCampo;
            Valor = valor;
            Descricao = descricao;
            Obrigatorio = obrigatorio;

            AddNotifications(new Contract()
                .Requires()
                .IsGreaterThan(Id, 0, "Campo.Id", "Id deve maior que zero.")
                .HasMinLen(Nome, 1, "Campo.Nome", "Nome deve conter pelo menos 1 caracteres")
                .IsTrue(Validar(), "Campo.Valor", "Valor é obrigatório")
            );

            _itens = new List<Item>();
        }
        public Campo(string nome, TipoCampo tipoCampo, string valor, string descricao, bool obrigatorio)
        {
            Nome = nome;
            TipoCampo = tipoCampo;
            Valor = valor;
            Descricao = descricao;
            Obrigatorio = obrigatorio;

            AddNotifications(new Contract()
                .Requires()
                .HasMinLen(Nome, 1, "Campo.Nome", "Nome deve conter pelo menos 1 caracteres")
            );

            _itens = new List<Item>();
        }

        public string Nome { get; private set; }
        public TipoCampo TipoCampo { get; private set; }
        public string Valor { get; private set; }
        public string Descricao { get; private set; }
        public bool Obrigatorio { get; private set; }
        public IReadOnlyCollection<Item> Items { get { return _itens.ToArray(); } }

        private bool Validar()
        {
            return Obrigatorio ? !string.IsNullOrWhiteSpace(Valor) : true;
        }
        private bool Validar(string value)
        {
            if (_itens.Any(p => p.Valor == value))
                return false;

            return true;
        }
        public void AddItem(Item item)
        {
            AddNotifications(new Contract()
            .Requires()
                .AreNotEquals(0, item.Valor, "Campo.Item", "Este Campo é obrigatório")
                .IsFalse(Validar(item.Valor), "Campo.Item.Valor", "Este este valor ja foi cadastrado.")
                );


            if (Valid)
                _itens.Add(item);
        }
    }
}
